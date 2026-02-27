import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { url: "/events", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/work-with-us", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/work-with-us/consulting", priority: 0.7, changeFrequency: "monthly" as const },
  { url: "/work-with-us/partners", priority: 0.7, changeFrequency: "monthly" as const },
  { url: "/work-with-us/sponsors", priority: 0.7, changeFrequency: "monthly" as const },
  { url: "/join", priority: 0.8, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const eventSlugs: { slug: string; _updatedAt: string }[] = await client
    .fetch(groq`*[_type == "event"]{ "slug": slug.current, _updatedAt }`)
    .catch(() => []);

  const eventRoutes = eventSlugs.map(({ slug, _updatedAt }) => ({
    url: `${siteConfig.url}/events/${slug}`,
    lastModified: new Date(_updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map(({ url, ...rest }) => ({
      url: `${siteConfig.url}${url}`,
      lastModified: new Date(),
      ...rest,
    })),
    ...eventRoutes,
  ];
}
