import Styles from "./HeaderLink.module.css";
import type { HTMLAttributes } from "astro/types";
import type { PropsWithChildren } from "react";

export default function HeaderLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  // const subPath = Astro.url.pathname.match(/[^\/]+/g);
  const isActive = false; // href === pathname || href === "/" + subPath?.[0];

  return (
    <a
      className={`${Styles.headerLink}${isActive ? " active" : ""}`}
      href={href}
    >
      {children}
    </a>
  );
}
