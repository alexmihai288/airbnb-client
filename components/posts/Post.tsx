import { FC } from "react";
import CarouselImages from "./ImagesCarousel";
import { FaStar } from "react-icons/fa";

interface PostProps {}

const Post: FC<PostProps> = ({}) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <CarouselImages carouselImages={[]} />
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-medium text-md">Joncherey, France</p>
          <div className="flex items-center">
            <FaStar />
            <span className="ml-2">4.83</span>
          </div>
        </div>
        <p className="text-secondaryGrey font-light">1,096 kilometers away</p>
        <p className="text-secondaryGrey font-light">Apr 7 - 12</p>
        <p className="font-medium mt-2">
          1,341 lei <span className="font-light">night</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
