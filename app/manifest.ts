import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ennova — ESADE's Entrepreneurship & Innovation Association",
    short_name: "Ennova",
    description:
      "Empowering students to innovate, consult, and create sustainable ventures.",
    start_url: "/",
    display: "standalone",
    background_color: "#13182e",
    theme_color: "#00AEEF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
