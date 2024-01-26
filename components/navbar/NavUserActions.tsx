import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";

interface NavUserActionsProps {}

const NavUserActions: FC<NavUserActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "rentLink" }), "text-md")}
      >
        AirBnb your home
      </Link>
      <div className="flex items-center gap-2.5 shadow-md px-4 py-2 rounded-full">
        <Menu />
        <Image
          src="/placeholder.jpg"
          alt="user-image"
          className="rounded-full"
          width={35}
          height={35} 
        />
      </div>
    </div>
  );
};

export default NavUserActions;
