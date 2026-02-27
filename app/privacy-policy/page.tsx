import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ennova collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <NextLink
          href="/"
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block"
        >
          ← Back to Home
        </NextLink>

        <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Who We Are</h2>
            <p>
              Ennova is a student-led entrepreneurship and innovation association based at ESADE Business School, Barcelona, Spain.
              This website is operated at <strong>esade.ennova.club</strong>.
            </p>
            <p className="mt-2">
              For any privacy-related questions, contact us at:{" "}
              <a href="mailto:contact@ennova.club" className="text-secondary underline">contact@ennova.club</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. What Data We Collect</h2>
            <p>We may collect the following personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Contact form:</strong> name, email address, company name, and message when you reach out via our Work With Us page.</li>
              <li><strong>Join application:</strong> information submitted through our Tally application form (name, email, answers to application questions).</li>
              <li><strong>Analytics:</strong> anonymous usage data (pages visited, time on site, referral source) if analytics is enabled.</li>
              <li><strong>Cookies:</strong> see Section 6 below.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Why We Collect It (Legal Basis)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contract / pre-contract:</strong> processing partnership or consulting enquiries.</li>
              <li><strong>Legitimate interest:</strong> operating and improving the website.</li>
              <li><strong>Consent:</strong> analytics cookies (you can withdraw consent at any time).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to enquiries and partnership requests.</li>
              <li>Processing membership applications.</li>
              <li>Improving our website and event offerings.</li>
              <li>We do <strong>not</strong> sell your data to third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Tally.so</strong> — application forms. <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary underline">Tally Privacy Policy</a>.</li>
              <li><strong>Sanity.io</strong> — content management. <a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary underline">Sanity Privacy Policy</a>.</li>
              <li><strong>Vercel</strong> — website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary underline">Vercel Privacy Policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Cookies</h2>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Strictly necessary:</strong> required for the site to function. No consent needed.</li>
              <li><strong>Analytics:</strong> help us understand how visitors use the site. Only set with your consent.</li>
            </ul>
            <p className="mt-2">You can manage your cookie preferences at any time using the cookie banner on our site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Data Retention</h2>
            <p>
              We retain contact form submissions and application data for up to 12 months, after which it is securely deleted unless a longer retention period is required by law or ongoing relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Your Rights (GDPR)</h2>
            <p>Under EU/UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
              <li>Lodge a complaint with the Spanish Data Protection Authority (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-secondary underline">AEPD</a>).</li>
            </ul>
            <p className="mt-2">
              To exercise any right, email us at{" "}
              <a href="mailto:contact@ennova.club" className="text-secondary underline">contact@ennova.club</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. The "Last updated" date at the top reflects the most recent revision. Continued use of the site after changes constitutes acceptance.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
