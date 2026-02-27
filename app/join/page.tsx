import { Metadata } from "next";
import { JoinPageClient } from "./JoinPageClient";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Apply to join Ennova — ESADE's most selective student association. Lead real projects, grow as a leader, and build your network. Only 40 spots per year.",
  openGraph: {
    title: "Join Ennova",
    description: "Apply to join Ennova — ESADE's most selective student association. Lead real projects, grow as a leader, and build your network.",
  },
};

export default function JoinPage() {
  return <JoinPageClient />;
}
