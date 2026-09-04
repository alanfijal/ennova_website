export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ennova",
  description: "Empowering students to innovate, consult, and create sustainable ventures.",
  url: "https://www.ennova.club/",
  ogImage: "/images/community/Screenshot 2026-01-30 at 15.21.56.png",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Work With Us",
      href: "/work-with-us",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Join Us",
      href: "/join",
    },
  ],
  navMenuItems: [
    {
      label: "Work With Us",
      href: "/work-with-us",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Join Us",
      href: "/join",
    },
  ],
  links: {
    platform: "https://ennova-events.com/",
    linkedin: "https://www.linkedin.com/company/ennovaesade/posts/?feedView=all",
    instagram: "https://www.instagram.com/ennova.esade/",
  },
};

/**
 * Single switch for the application season.
 * Flip `isOpen` to false once the intake closes — every apply button, banner
 * and announcement across the site reads from here.
 */
export const applications = {
  isOpen: true,
  /** External form applicants are sent to. */
  applyUrl: "https://ennova-events.com/join/apply",
  /** In-app anchor of the apply section, for internal links. */
  anchor: "/join#apply",
  /** Shown next to the announcements — leave empty to hide. */
  deadline: "",
};

/** Absolute, shareable deep link straight to the apply section. */
export const applyShareUrl = `${siteConfig.url.replace(/\/$/, "")}${applications.anchor}`;
