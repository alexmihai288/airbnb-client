"use client";
import { Separator } from "@/components/ui/separator";
import { FC, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
interface BasicsProps {}

const Basics: FC<BasicsProps> = ({}) => {
  const [bedRooms, setBedRooms] = useState<number>(1);
  const [bathRooms, setBathRooms] = useState<number>(1);

  return (
    <div className="space-y-5 py-10">
      <div className="flex items-center justify-between">
        <p className="text-lg">Bedrooms</p>
        <div className="flex items-center gap-2.5">
          <CiCircleMinus
            className={`h-7 w-7 ${bedRooms == 0 && "text-secondaryGrey"}`}
            onClick={() =>
              setBedRooms((prevState) => {
                if (prevState - 1 > 0) return (prevState = prevState - 1);
                return 0;
              })
            }
          />
          <span className="text-lg">{bedRooms}</span>
          <CiCirclePlus
            className="h-7 w-7"
            onClick={() => setBedRooms((prevState) => prevState + 1)}
          />
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <p className="text-lg">Bathrooms</p>
        <div className="flex items-center gap-2.5">
          <CiCircleMinus
            className={`h-7 w-7 ${bathRooms == 0 && "text-secondaryGrey"}`}
            onClick={() =>
              setBathRooms((prevState) => {
                if (prevState - 1 > 0) return (prevState = prevState - 1);
                return 0;
              })
            }
          />
          <span className="text-lg">{bathRooms}</span>
          <CiCirclePlus
            className="h-7 w-7"
            onClick={() => setBathRooms((prevState) => prevState + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Basics;
