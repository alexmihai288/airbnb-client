import { FC } from "react";
import CarouselImages from "./ImagesCarousel";
import { FaStar } from "react-icons/fa";
import { Post } from "@prisma/client";

interface PostProps {
  post: Post;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <CarouselImages carouselImages={post.images} />
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium text-md">
            {post.city}, {post.country}
          </p>
          <div className="flex items-center">
            <FaStar />
            <span className="ml-2">{post.rate}</span>
          </div>
        </div>
        <p className="text-secondaryGrey font-light">1,096 kilometers away</p>
        <p className="text-secondaryGrey font-light">Apr 7 - 12</p>
        <p className="font-medium mt-2">
          {post.price} euros<span className="font-light"> night</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
