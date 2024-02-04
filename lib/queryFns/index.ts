import { Post } from "@prisma/client";
import axios from "axios";

export const fetchGroups = async () => {
  const { data } = await axios.get("/api/queryFns/posts");
  return data as Post[];
};
