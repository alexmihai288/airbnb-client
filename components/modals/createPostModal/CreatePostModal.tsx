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
import ChooseAddress from "./createParts/ChooseAddress";
import Basics from "./createParts/Basics";
import { Progress } from "@/components/ui/progress";

interface CreatePostModalProps {}

const CreatePostModal: FC<CreatePostModalProps> = ({}) => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "createPost";
  const [part, setPart] = useState<number>(1);

  console.log(part);
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

        {part == 1 && <ChooseLocationType />}
        {part == 2 && <ChooseAddress />}
        {part == 3 && <Basics />}

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
            <Progress value={part * 25} className="w-[40%] my-auto" />
            <Button
              className="text-lg px-6 py-4"
              onClick={() => setPart((prevPart) => prevPart + 1)}
            >
              Next
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
