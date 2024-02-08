import { db } from "@/lib/db";
import { FC } from "react";
import Header from "../_components/Header";
import Image from "next/image";

interface pageProps {
  params: {
    postId: string;
  };
}

const page: FC<pageProps> = async ({ params: { postId } }) => {
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });
  return (
    <div className="container">
      <Header title={`${post?.country}, ${post?.city}`} />

      <div className="flex flex-col md:flex-row justify-center gap-2">
        <Image
          src={post?.images[0]!}
          width={350}
          height={350}
          alt="post-image"
          className="rounded-l-2xl"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={post?.images[0]!}
              width={171}
              height={171}
              alt="image-post"
            />
            <Image
              src={post?.images[0]!}
              width={171}
              height={171}
              alt="image-post"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={post?.images[0]!}
              width={171}
              height={171}
              alt="image-post"
            />
            <Image
              src={post?.images[0]!}
              width={171}
              height={171}
              alt="image-post"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
