import { notFound } from "next/navigation";
import NextLink from "next/link";
import { ArrowLeftIcon, UsersIcon, TargetIcon, TrendUpIcon, ArrowSquareOutIcon, CameraIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import Image from "next/image";
import { getEventBySlug } from "@/data";

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getEventBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10">
          <div className="mb-8">
            <NextLink
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Activity Library
            </NextLink>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
              {activity.domain}
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {activity.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">
              {activity.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-gray-400">Date:</span>
                <span className="font-semibold">{activity.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-gray-400">Location:</span>
                <span className="font-semibold">{activity.location}</span>
              </div>
            </div>

            {/* Join Event Button */}
            <Button
              as="a"
              href={activity.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="h-16 px-12 bg-secondary text-white hover:bg-white hover:text-primary font-bold rounded-none transition-all shadow-lg"
              endContent={<ExternalLink className="w-5 h-5" />}
            >
              Join the Event
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
            <div className="glass-dark p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-secondary mb-2 tracking-tight">
                {activity.impact.partnerships}
              </div>
              <div className="text-sm text-gray-500 uppercase">Corporate Partners</div>
            </div>
            <div className="glass-dark p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-secondary mb-2 tracking-tight">
                {activity.impact.participants}
              </div>
              <div className="text-sm text-gray-500 uppercase">Participants</div>
            </div>
            <div className="glass-dark p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-secondary mb-2 tracking-tight">
                {activity.impact.outcomes.split(" ")[0]}
              </div>
              <div className="text-sm text-gray-500 uppercase">{activity.impact.outcomes.split(" ").slice(1).join(" ")}</div>
            </div>
            <div className="glass-dark p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-secondary mb-2 tracking-tight">
                {activity.impact.funding.split(" ")[0]}
              </div>
              <div className="text-sm text-gray-500 uppercase">{activity.impact.funding.split(" ").slice(1).join(" ")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {activity.overview}
            </p>

            <h3 className="text-2xl font-extrabold mb-6 tracking-tight">Objectives</h3>
            <ul className="space-y-4 mb-12">
              {activity.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-gray-400 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Event Media Gallery */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Camera className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Event Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activity.media.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 hover:border-secondary/40 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`${activity.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-extrabold mb-12 tracking-tight">Key Outcomes & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activity.outcomes.map((outcome, idx) => (
                <div key={idx} className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-secondary/40 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{outcome.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl glass-dark p-12 rounded-3xl border border-white/10">
            <div className="text-5xl text-secondary mb-6">"</div>
            <blockquote className="text-2xl font-medium text-white mb-8 leading-relaxed">
              {activity.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-white">{activity.testimonial.author}</div>
                <div className="text-sm text-gray-500">{activity.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight">Participating Partners</h2>
            <div className="flex flex-wrap gap-4">
              {activity.partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 rounded-full glass-dark border border-white/10 text-sm font-medium text-gray-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
              Interested in <span className="text-gradient-accent">Collaborating</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Partner with Ennova to create similar high-impact initiatives for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={NextLink}
                href="/work-with-us#contact"
                className="h-14 px-10 bg-white text-primary hover:bg-secondary hover:text-white font-bold rounded-none transition-all"
              >
                Contact Partnerships Team
              </Button>
              <Button
                as="a"
                href="https://platform.ennova.org/events"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
                endContent={<ExternalLink className="w-5 h-5" />}
              >
                Browse Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}