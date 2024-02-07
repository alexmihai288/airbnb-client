"use client";
import { FC } from "react";
import Post from "./Post";
import { Post as PostType } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PostFeedProps {
  posts: PostType[];
}

const PostFeed: FC<PostFeedProps> = ({ posts }) => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/queryFns/posts");
      return data as Post[];
    },
    initialData: posts,
  });

  const router = useRouter();
  //env updated

  return (
    <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-y-14">
      {data?.map((post) => (
        <div
          key={post.id}
          className="cursor-pointer"
          onClick={() => router.push(`/post/${post.id}`)}
        >
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
