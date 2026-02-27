"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-primary text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 leading-relaxed flex-1">
          We use cookies to improve your experience and analyse site usage.
          See our{" "}
          <NextLink href="/privacy-policy" className="underline text-secondary hover:text-white transition-colors">
            Privacy Policy
          </NextLink>{" "}
          for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm font-bold bg-secondary text-white hover:bg-secondary/90 transition-colors px-5 py-2 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
