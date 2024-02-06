import { FC } from "react";
import UserOptions from "./UserOptions";
import OpenCreatePostModal from "../OpenCreatePostModal";
import { currentUser } from "@/lib/auth";
import OpenLoginModal from "../OpenLoginModal";

interface NavUserActionsProps {}

const NavUserActions: FC<NavUserActionsProps> = async ({}) => {
  const user = await currentUser();
  return (
    <div className="flex items-center gap-2.5">
      <div className="hidden md:block">
        {user?.id ? (
          <OpenCreatePostModal>
            <p className="cursor-pointer text-md  whitespace-nowrap h-10 px-4 py-2 hover:bg-[#f7f7f7] rounded-full">
              AirBnb your home
            </p>
          </OpenCreatePostModal>
        ) : (
          <OpenLoginModal>
            <p className="hover:bg-primaryGrey whitespace-nowrap p-2.5 text-md  h-10 px-4 py-2 rounded-full">
              AirBnb your home
            </p>
          </OpenLoginModal>
        )}
      </div>
      <UserOptions />
    </div>
  );
};

export default NavUserActions;
