import { FC } from "react";
import PostActions from "./PostActions";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="py-5 flex items-center justify-between">
      <h1 className="text-3xl font-medium">{title}</h1>

      <PostActions/>
    </div>
  );
};

export default Header;
