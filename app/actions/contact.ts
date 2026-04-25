"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Ennova Events <no-reply@ennova-events.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "ennova@esade.edu";

export type ContactFormState =
  | { status: "success" }
  | { status: "error"; message: string };

export type ContactFormInput = {
  name: string;
  email: string;
  company: string;
  message: string;
  website?: string;
};

export async function sendContactMessage(
  input: ContactFormInput,
): Promise<ContactFormState> {
  if (input.website && input.website.trim() !== "") {
    return { status: "success" };
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const company = input.company.trim();
  const message = input.message.trim();

  if (!name || !email || !company || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (message.length > 5000) {
    return { status: "error", message: "Message is too long." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      message: "The contact form is not configured. Please email us directly.",
    };
  }

  const subject = `New contact form submission from ${name} (${company})`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <p style="margin: 4px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 4px 0;"><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p style="margin: 16px 0 4px;"><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; margin: 0; padding: 12px; background: #f5f5f5; border-radius: 6px;">${escapeHtml(
        message,
      )}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message.",
    };
  }

  return { status: "success" };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
