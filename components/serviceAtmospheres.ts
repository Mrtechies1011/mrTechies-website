export const SERVICE_ATMOSPHERES: Record<
  string,
  {
    glass: string;
    accent: string;
    blur: string;
  }
> = {
  design: {
    glass: "rgba(168, 195, 245, 0.7)",
    accent: "#0e2053",
    blur: "blur(18px)",
  },
  development: {
    glass: "rgba(158, 204, 249, 0.7)",
    accent: "#0f172a",
    blur: "blur(18px)",
  },
  seo: {
    glass: "rgba(211, 253, 233, 0.7)",
    accent: "#065f46",
    blur: "blur(18px)",
  },
  app: {
    glass: "rgba(194, 183, 251, 0.7)",
    accent: "#4c1d95",
    blur: "blur(18px)",
  },
  crm: {
    glass: "rgba(174, 211, 249, 0.75)",
    accent: "#111827",
    blur: "blur(20px)",
  },
  marketing: {
    glass: "rgba(243, 207, 164, 0.75)",
    accent: "#92400e",
    blur: "blur(18px)",
  },
  content: {
    glass: "rgba(255, 177, 182, 0.75)",
    accent: "#f7b7c9",
    blur: "blur(18px)",
  },
};
