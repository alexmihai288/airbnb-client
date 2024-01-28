import Categories from "@/components/categories/Categories";
import PostFeed from "@/components/posts/PostFeed";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/auth";

export default async function Home() {
  // const user = await currentUser()
  // console.log(user)
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
