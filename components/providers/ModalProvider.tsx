"use client";

import LoginModal from "../modals/loginModal/LoginModal";
import RegisterModal from "../modals/regiserModal/RegisterModal";
import CreatePostModal from "../modals/createPostModal/CreatePostModal";
export const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <CreatePostModal />
    </>
  );
};
