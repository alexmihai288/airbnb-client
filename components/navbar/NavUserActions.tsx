import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import UserOptions from "./UserOptions";

interface NavUserActionsProps {
}

const NavUserActions: FC<NavUserActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "rentLink" }), "text-md")}
      >
        AirBnb your home
      </Link>
      <UserOptions/>
    </div>
  );
};

export default NavUserActions;
