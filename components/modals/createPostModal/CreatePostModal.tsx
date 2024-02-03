"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useModal } from "@/hooks/use-modal";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import ChooseLocationType from "./createParts/ChooseLocationType";

import Basics from "./createParts/Basics";
import { Progress } from "@/components/ui/progress";
import { FileUpload } from "./createParts/UploadImages";
import ChooseAddress from "./createParts/ChooseAddress";

interface CreatePostModalProps {}

const CreatePostModal: FC<CreatePostModalProps> = ({}) => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "createPost";
  const [part, setPart] = useState<number>(1);

  //ChooseAddress Part
  const [locationType, setLocationType] = useState<string>("Beach");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const buttonDisabled =
    country.length == 0 && city.length == 0 && !postalCode && part == 2;

  //Basics Part
  const [bedRooms, setBedRooms] = useState<number>(1);
  const [bathRooms, setBathRooms] = useState<number>(1);

  //Upload Part
  const [images, setImages] = useState([""]);


  

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-2.5">
            {part == 1 && "Which of these best describes your place?"}
            {part == 2 && "Confirm your address"}
            {part == 3 && "Share some basics about your place"}
            {part == 4 && "Add some photos of your place"}
          </DialogTitle>
          <Separator />
        </DialogHeader>

        {part == 1 && (
          <ChooseLocationType
            setLocationType={setLocationType}
            locationType={locationType}
          />
        )}
        {part == 2 && (
          <ChooseAddress
            setCountry={setCountry}
            country={country}
            setCity={setCity}
            city={city}
            setStreetAddress={setStreetAddress}
            streetAddress={streetAddress}
            setPostalCode={setPostalCode}
            postalCode={postalCode}
          />
        )}
        {part == 3 && (
          <Basics
            setBedRooms={setBedRooms}
            bedRooms={bedRooms}
            setBathRooms={setBathRooms}
            bathRooms={bathRooms}
          />
        )}
        {part == 4 && <FileUpload setImages={setImages} images={images} />}

        <DialogFooter className="mt-auto">
          <div className="flex w-full justify-between">
            <Button
              variant="link"
              className={`underline text-md hover:bg-[#f7f7f7] transition-colors ${
                part == 1 && "text-secondaryGrey"
              }`}
              disabled={part == 1}
              onClick={() =>
                setPart((prevPart) => {
                  if (prevPart - 1 > 0) return (prevPart = prevPart - 1);

                  return 1;
                })
              }
            >
              Back
            </Button>
            <Progress
              value={part < 4 ? part * 25 : part * 20}
              className="w-[40%] my-auto"
            />
            {part < 4 ? (
              <Button
                disabled={buttonDisabled}
                className="text-lg px-6 py-4"
                onClick={() => setPart((prevPart) => prevPart + 1)}
              >
                Next
              </Button>
            ) : (
              <Button
                className="text-lg px-6 py-4"
                disabled={images[0].length == 0}
              >
                Create
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
