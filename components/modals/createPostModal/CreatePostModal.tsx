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

interface CreatePostModalProps {}

const CreatePostModal: FC<CreatePostModalProps> = ({}) => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "createPost";

  const [part, setPart] = useState(1);

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center py-2.5">
            {part == 1 && "Which of these best describes your place?"}
            {part == 2 && "Confirm your address"}
            {part == 3 && "Share some basics about your place"}
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
              className="underline text-md hover:bg-[#f7f7f7] transition-colors"
              onClick={() => setPart((prevPart) => prevPart - 1)}
            >
              Back
            </Button>
            <p>progress</p>
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
