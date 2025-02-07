import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Wanma <span className="text-acent-green">.</span>
          </h1>
        </Link>
        {/*desktop nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link> */}
        </div>
        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
