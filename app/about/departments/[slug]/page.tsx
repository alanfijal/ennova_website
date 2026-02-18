import { notFound } from "next/navigation";
import { fetchDepartmentBySlug } from "@/sanity/lib/fetch";
import { DepartmentPageClient } from "./DepartmentPageClient";

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = await fetchDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  return <DepartmentPageClient department={department} />;
}
