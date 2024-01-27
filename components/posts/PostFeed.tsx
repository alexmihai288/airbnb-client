import { FC } from "react";
import Post from "./Post";
import { ScrollArea } from "../ui/scroll-area";

interface PostFeedProps {}

const PostFeed: FC<PostFeedProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-y-14 justify-items-center">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostFeed;
