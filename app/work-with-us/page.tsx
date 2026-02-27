import { Metadata } from "next";
import { WorkWithUsPageClient } from "./WorkWithUsPageClient";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Partner with Ennova — ESADE's entrepreneurship association. Access top student talent through consulting services, strategic partnerships, or event sponsorship.",
  openGraph: {
    title: "Work With Ennova",
    description: "Partner with Ennova to access ESADE's top entrepreneurial talent. Consulting, strategic partnerships, and event sponsorship opportunities available.",
  },
};

export default function WorkWithUsPage() {
  return <WorkWithUsPageClient />;
}
