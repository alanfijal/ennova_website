import { fetchDepartments } from "@/sanity/lib/fetch";
import { AboutPageClient } from "./AboutPageClient";

export default async function AboutPage() {
  const departments = await fetchDepartments();

  return <AboutPageClient departments={departments} />;
}
