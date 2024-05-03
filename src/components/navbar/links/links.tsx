"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
	{
		title: "Blog",
		href: "/blog",
	},

];

const Links = () => {
	const [open, setOpen] = useState(false);

	const session = true;
	const isAdmin = true;

	const handleClick = () => {
		setOpen(!open);
	}
	return (
		<>
			<div className="hidden md:flex md:gap-2">
				{
					links.map((link) => (
						<NavLink key={link.title} link={link} handleClick={handleClick} />
					))
				}
				{
					session ?
						(
							<>
								{isAdmin && <NavLink link={{ title: "Admin", href: "/admin" }} handleClick={handleClick} />}
								<button className="min-w-20 p-2 font-medium text-center bg-white text-black">
									Logout
								</button>
							</>
						)
						:
						(
							<NavLink link={{ title: "Login", href: "/login" }} handleClick={handleClick} />
						)
				}

			</div>

			<div className="md:hidden">
				<button onClick={() => setOpen(!open)}>
					<Image src={'/menu.png'} alt="menu" height={25} width={25} />
				</button>
				<div className={`z-10 absolute top-20 w-1/2 h-[calc(100vh-80px)] flex flex-col justify-evenly items-center overflow-hidden transition-all duration-500 ease-in-out bg-slate-500 ${open ? "right-0 block" : "-right-96"}`}>
					{links.map((link) => (
						<NavLink key={link.title} link={link} handleClick={handleClick} />
					))}
				</div>
			</div>
		</>
	)
}

export default Links;