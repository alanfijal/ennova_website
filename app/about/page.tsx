import { Metadata } from "next";
import { fetchDepartments } from "@/sanity/lib/fetch";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Ennova — ESADE's student association for entrepreneurship, consulting, and innovation. Learn about our departments and mission.",
  openGraph: {
    title: "About Ennova",
    description: "Meet the team behind Ennova — ESADE's student association for entrepreneurship, consulting, and innovation.",
  },
};

export default async function AboutPage() {
  const departments = await fetchDepartments();

  return <AboutPageClient departments={departments} />;
}
