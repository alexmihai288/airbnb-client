import { CategoryIcons } from "@/constants";
import { FC } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  return (
    <ScrollArea className="max-w-full">
      <div className="flex items-center py-8 gap-8">
        {CategoryIcons.map((category, i) => (
          <div key={i} className="space-y-2 group">
            <category.icon className="text-[#717171] w-8 h-8 mx-auto group-hover:text-[#000000] transition-colors" />
            <p className="text-xs text-center text-secondaryGrey group-hover:text-[#000000] transition-colors">
              {category.label}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Categories;
