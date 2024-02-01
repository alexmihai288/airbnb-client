import { FC } from "react";
import UserOptions from "./UserOptions";
import OpenCreatePostModal from "../OpenCreatePostModal";

interface NavUserActionsProps {}

const NavUserActions: FC<NavUserActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-2.5">
      <OpenCreatePostModal>
        <p className="cursor-pointer text-md h-10 px-4 py-2 hover:bg-[#f7f7f7] rounded-full">
          AirBnb your home
        </p>
      </OpenCreatePostModal>
      <UserOptions />
    </div>
  );
};

export default NavUserActions;
