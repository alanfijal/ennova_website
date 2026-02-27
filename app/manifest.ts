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
    ],
  };
}
