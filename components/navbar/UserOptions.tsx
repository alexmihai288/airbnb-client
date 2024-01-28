import { Menu } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import LogoutButton from "./LogoutButton";
import { currentUser } from "@/lib/auth";
import OpenLoginModal from "./OpenLoginModal";

interface UserOptionsProps {}

const UserOptions: FC<UserOptionsProps> = async ({}) => {
  const user = await currentUser();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-2.5 shadow-md px-4 py-2 rounded-full hover:shadow-lg transition-shadow">
          <Menu />
          <Image
            src="/placeholder.jpg"
            alt="user-image"
            className="rounded-full"
            width={35}
            height={35}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-lg">
        {user?.id ? (
          <>
            <div className="font-medium pt-2.5">
              <p className="hover:bg-primaryGrey p-2.5 text-md">Trips</p>
              <p className="hover:bg-primaryGrey p-2.5 text-md">Wishlists</p>
            </div>
            <Separator className="mb-2.5" />
            <LogoutButton />
          </>
        ) : (
          <>
            <div className="pt-2.5">
              <OpenLoginModal />
              <p className="hover:bg-primaryGrey p-2.5 text-md font-normal">
                Sign up
              </p>
            </div>
            <Separator className="mb-2.5" />
            <p className="hover:bg-primaryGrey p-2.5 text-md font-normal">
              Airbnb your home
            </p>
            <p className="hover:bg-primaryGrey p-2.5 text-md font-normal">
              Help Center
            </p>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default UserOptions;
