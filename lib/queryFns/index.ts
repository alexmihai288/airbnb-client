import { Post } from "@prisma/client";
import axios from "axios";

export const fetchGroups = async () => {
  const { data } = await axios.get("/api/queryFns/posts");
  console.log(data,"das");
  return data as Post[];
};
