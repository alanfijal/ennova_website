"use client";

import { LockIcon } from "@phosphor-icons/react";

export function TallyFormEmbed() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-5">
        <LockIcon className="w-5 h-5 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">
        Applications are closed
      </h3>
      <p className="text-sm text-gray-400 max-w-xs">
        Follow us on social media to know when they reopen.
      </p>
    </div>
  );
}
