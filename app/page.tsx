import Categories from "@/components/categories/Categories";
import PostFeed from "@/components/posts/PostFeed";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="">
      <div className="container">
        <Categories />
      </div>
      <Separator />
      <div className="container py-2.5">
        <PostFeed />
      </div>
    </div>
  );
}
