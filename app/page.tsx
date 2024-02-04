import Categories from "@/components/categories/Categories";
import PostFeed from "@/components/posts/PostFeed";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";

export default async function Home() {
  const posts = await db.post.findMany();
  return (
    <div className="">
      <div className="container">
        <Categories />
      </div>
      <Separator />
      <div className="container py-2.5">
        <PostFeed posts={posts || []} />
      </div>
    </div>
  );
}
