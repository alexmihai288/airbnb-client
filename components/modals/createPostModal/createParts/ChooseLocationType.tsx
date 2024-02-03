"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoryIcons } from "@/constants";
import { cn } from "@/lib/utils";
import { Dispatch, FC, SetStateAction } from "react";

interface ChooseLocationTypeProps {
  setLocationType: Dispatch<SetStateAction<string>>;
  locationType: string;
}

const ChooseLocationType: FC<ChooseLocationTypeProps> = ({
  setLocationType,
  locationType,
}) => {
  return (
    <ScrollArea className="max-h-[500px]">
      <div className="grid grid-cols-2 gap-5 mr-4">
        {CategoryIcons.map((categoryIcon, i) => (
          <div
            key={i}
            onClick={() => setLocationType(categoryIcon.label)}
            className={cn(
              "border-2 border-primaryGrey px-3 py-4 rounded-md hover:border-black transition-colors",
              categoryIcon.label == locationType && "border-black"
            )}
          >
            <categoryIcon.icon className="text-4xl" />
            <p>{categoryIcon.label}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChooseLocationType;
