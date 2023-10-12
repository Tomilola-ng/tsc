import Link from "next/link";
import Img from "./Img";

const Nav = () => {
  const img_load = {
    img_src: "/logo.png",
    img_alt: "Logo",
    width: "50px",
    height: "50px",
  };

  return (
    <header className="w-full p-3 flex place-items-center justify-between">
      <Link href="/" className="font-bold flex gap-1 place-items-center">
        <Img pay_load={img_load} />
      </Link>
      <nav className="flex gap-2 text-sm text-primary">
        <Link href="/"> Chat </Link>
        <Link href="/"> Sponsor </Link>
      </nav>
    </header>
  );
};

export default Nav;
