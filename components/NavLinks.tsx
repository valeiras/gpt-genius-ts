import Link from "next/link";
import React from "react";

type Link = { href: string; label: string };

const links: Link[] = [
  { href: "/chat", label: "chat" },
  { href: "/tours", label: "tours" },
  { href: "/tours/new-tour", label: "new tour" },
  { href: "/profile", label: "profile" },
];

const NavLinks: React.FC = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="uppercase">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
