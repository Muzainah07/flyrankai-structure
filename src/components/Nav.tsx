"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/health", label: "Health" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          myapp
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
              >
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive ? "bg-accent" : "bg-border"
                  }`}
                />
                <span className={isActive ? "text-foreground" : undefined}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
