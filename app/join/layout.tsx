import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join the Ennova community - Be part of something extraordinary. Join Europe's leading student consulting and entrepreneurship organization.",
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
