import { FC } from "react";
import { Separator } from "../ui/separator";
import { SearchIcon } from "lucide-react";

interface NavActionsProps {}

const NavActions: FC<NavActionsProps> = ({}) => {
  return (
    <div className="shadow-md rounded-full px-4 py-2 md:flex items-center hidden">
      <div className="flex items-center gap-2.5">
        <p className="font-semibold tracking-tight">Anywhere</p>
        <Separator className="w-0.5 h-8" />
      </div>
      <div className="flex items-center gap-2.5 ml-2.5">
        <p className="font-semibold tracking-tight">Anyweek</p>
        <Separator className="w-0.5 h-8" />
      </div>
      <div className="flex items-center gap-2.5 ml-2.5">
        <p className="text-[#717171] tracking-tight">Add guests</p>
        <SearchIcon className="text-primaryRed" />
      </div>
    </div>
  );
};

export default NavActions;
