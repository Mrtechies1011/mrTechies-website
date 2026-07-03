"use client";

import ServiceScene from "./ServiceScene";
import { SERVICE_ATMOSPHERES } from "./serviceAtmospheres";

export default function ServiceImmersion({
  service,
  onExit,
}: {
  service: string;
  onExit: () => void;
}) {
  const atmosphere = SERVICE_ATMOSPHERES[service];

  return (
    <section
      className="relative w-full"
      style={{
        background: atmosphere.glass,
        backdropFilter: atmosphere.blur,
        WebkitBackdropFilter: atmosphere.blur,
        color: atmosphere.accent,
      }}
    >
      {/* INNER WRAPPER WITH CONTROLLED HEIGHT */}
      <div
      >
        {/* CLOSE BUTTON — CLEAN & NON‑CLUMSY */}
        <div className="sticky top-0 z-100 flex justify-end p-6 rounded-t-3xl">
          <button
            onClick={onExit}
            className="
              px-6 py-2
              rounded
              border
              shadow-xl
              bg-white
              text-sm font-medium
              hover:bg-brand-orange
              hover:text-brand-Blue
              hover:border-0
              transition
            "
          >
            Close
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-6 pb-22">
          <ServiceScene service={service} />
        </div>
      </div>
    </section>
  );
}
