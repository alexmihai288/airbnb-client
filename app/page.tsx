import Categories from "@/components/categories/Categories";
import Post from "@/components/posts/Post";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="">
      <div className="container">
        <Categories />
      </div>
      <Separator />
      <div className="container py-2.5">
        <p>Post feed</p>
        <Post />
      </div>
    </div>
  );
}
