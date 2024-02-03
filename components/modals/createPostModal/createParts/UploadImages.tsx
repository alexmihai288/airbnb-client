"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
// import { toast } from "sonner";

interface FileUploadProps {
  setImages: Dispatch<SetStateAction<string[]>>;
  images: string[];
}

export const FileUpload = ({ setImages, images }: FileUploadProps) => {
  const deleteImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  if (images[0].length > 0) {
    return (
      <ScrollArea className="max-h-[400px]">
        <div className="space-y-2.5">
          {images.map((image, i) => (
            <div key={i} className="relative w-fit mx-auto">
              <Image
                src={image}
                className="w-full rounded-md"
                alt="group-image"
                width={150}
                height={150}
              />
              <button
                className="bg-primaryRed text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                type="button"
                onClick={() => deleteImage(i)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </ScrollArea>
    );
  }

  return (
    <UploadDropzone
      appearance={{
        uploadIcon: { color: "primaryGrey" },
      }}
      endpoint={"postImage"}
      onClientUploadComplete={(res) => {
        const urls = res.map((item) => item.url);
        setImages(urls);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
        // toast.error("Something went wrong uploading your image");
      }}
    />
  );
};
