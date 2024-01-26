import Image from "next/image";
import { FC } from "react";
import NavActions from "./NavActions";
import NavUserActions from "./NavUserActions";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="container flex items-center justify-between py-5">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <NavActions />
      <NavUserActions />
    </div>
  );
};

export default Navbar;
