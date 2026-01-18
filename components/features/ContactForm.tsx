"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                name="name"
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                classNames={{
                  input: "bg-white/5 text-white",
                  inputWrapper: "bg-white/5 border border-white/10 hover:border-secondary/50 focus-within:border-secondary",
                  label: "text-gray-400",
                }}
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                label="Email Address"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                classNames={{
                  input: "bg-white/5 text-white",
                  inputWrapper: "bg-white/5 border border-white/10 hover:border-secondary/50 focus-within:border-secondary",
                  label: "text-gray-400",
                }}
              />
            </div>
          </div>

          <div>
            <Input
              name="company"
              label="Company Name"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              required
              classNames={{
                input: "bg-white/5 text-white",
                inputWrapper: "bg-white/5 border border-white/10 hover:border-secondary/50 focus-within:border-secondary",
                label: "text-gray-400",
              }}
            />
          </div>

          <div>
            <Textarea
              name="message"
              label="Message"
              placeholder="Tell us about your project or partnership opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
              minRows={5}
              classNames={{
                input: "bg-white/5 text-white",
                inputWrapper: "bg-white/5 border border-white/10 hover:border-secondary/50 focus-within:border-secondary",
                label: "text-gray-400",
              }}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-full transition-all disabled:opacity-50"
            endContent={
              isSubmitting ? null : <Send className="w-5 h-5" />
            }
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
