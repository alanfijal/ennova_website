import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of the Ennova website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <NextLink
          href="/"
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block"
        >
          ← Back to Home
        </NextLink>

        <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Acceptance</h2>
            <p>
              By accessing or using <strong>www.ennova.club</strong> ("the Site"), you agree to these Terms of Use.
              If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. About Ennova</h2>
            <p>
              Ennova is a non-profit student association affiliated with ESADE Business School, Barcelona.
              The Site is operated for informational and community purposes to showcase events, partnerships,
              and membership opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Site for any unlawful purpose or in violation of any regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
              <li>Transmit harmful, offensive, or disruptive content through any contact forms.</li>
              <li>Reproduce, copy, or redistribute content from the Site without prior written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Intellectual Property</h2>
            <p>
              All content on the Site — including text, graphics, logos, and images — is the property of Ennova
              or its content contributors and is protected by applicable intellectual property laws.
              You may not use our branding or content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Third-Party Links</h2>
            <p>
              The Site may contain links to external websites (e.g. partner organisations, event platforms).
              Ennova is not responsible for the content, privacy practices, or availability of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Disclaimer of Warranties</h2>
            <p>
              The Site is provided "as is" without warranties of any kind. Ennova does not warrant that
              the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ennova shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of, or inability to use, the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Spain. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of Barcelona.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">9. Changes</h2>
            <p>
              We reserve the right to update these Terms at any time. The "Last updated" date above reflects
              the latest revision. Continued use of the Site constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">10. Contact</h2>
            <p>
              Questions about these Terms?{" "}
              <a href="mailto:contact@ennova.club" className="text-secondary underline">contact@ennova.club</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
