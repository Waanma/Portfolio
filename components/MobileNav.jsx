"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="flex gap-8">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-acent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-16 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <h1>
              Wanma <span className="text-acent">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname && "text-acent border-b-2 border-acent"}capitalize text-xl hover:text-acent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
