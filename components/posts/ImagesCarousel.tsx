"use client";

import { FC } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dot } from "lucide-react";

interface CarouselImagesProps {
  carouselImages: string[];
}

const CarouselImages: FC<CarouselImagesProps> = ({ carouselImages }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel className="relative" setApi={setApi}>
        <CarouselContent>
          {carouselImages.map((carouselImage) => (
            <CarouselItem key={carouselImage}>
              <Image
                src={carouselImage}
                alt="post-image"
                width={500}
                height={500}
                className="rounded-xl object-cover max-w-[320px] "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-[34%] flex items-center">
          {[...Array(Math.min(count, 5))].map((_, index) => (
            <Dot
              key={index}
              className={`text-[#ababa7] duration-700 gap-0 ${
                index + 1 === current ? "text-white" : ""
              }`}
            />
          ))}
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "}
    </>
  );
};

export default CarouselImages;
