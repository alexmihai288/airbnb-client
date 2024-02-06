import { FC } from "react";
import { CiHeart } from "react-icons/ci";

interface PostActionsProps {}

const PostActions: FC<PostActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-2">
      <CiHeart className="text-xl" />
      <p className="cursor-pointer text-md underline rounded-full">Save</p>
    </div>
  );
};

export default PostActions;
