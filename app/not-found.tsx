import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-foreground/40 mb-4">
        404
      </p>
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-foreground/60 max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-opacity hover:opacity-80"
      >
        Back to home
      </Link>
    </div>
  );
}
