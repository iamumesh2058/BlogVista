"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProp = {
  link: {
    href: string,
    title: string
  },
  handleClick: () => void
}

const NavLink = ({ link, handleClick }: NavLinkProp) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      className={`min-w-20 p-2 rounded-full font-medium text-center transcolors  ${isActive ? 'bg-white text-black hover:text-gray-900 hover:bg-gray-200' : 'hover:text-gray-100'} `}
      onClick={handleClick}
    >
      {link.title}
    </Link>
  )
}

export default NavLink;