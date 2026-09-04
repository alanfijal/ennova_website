"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, LinkSimpleIcon } from "@phosphor-icons/react";

interface CopyLinkButtonProps {
  /** Absolute URL placed on the clipboard. */
  url: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

/**
 * Copies a shareable link to the clipboard, with a graceful fallback for
 * browsers that block the async clipboard API (older Safari, non-HTTPS).
 */
export function CopyLinkButton({
  url,
  label = "Copy link",
  copiedLabel = "Link copied",
  className = "",
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement("textarea");
        input.value = url;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — surface the URL so it can be copied by hand.
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={url}
      aria-label={`${label}: ${url}`}
      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${className}`}
    >
      {copied ? (
        <CheckIcon className="w-4 h-4" weight="bold" />
      ) : (
        <LinkSimpleIcon className="w-4 h-4" />
      )}
      {copied ? copiedLabel : label}
    </button>
  );
}
