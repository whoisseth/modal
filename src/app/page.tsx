/** @format */
"use client";

import { Modal } from "@/components/Modal";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Home() {
  const [animationParent] = useAutoAnimate();
  return (
    <main
      ref={animationParent}
      className="flex min-h-screen  flex-col  gap-3  p-24 "
    >
      <h1 className="text-3xl font-semibold">Alert Dialog</h1>
      <p>
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>

      <DialogModal />
    </main>
  );
}

function DialogModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal
        closeModal={closeModal}
        showModal={modalIsOpen}
        className="p-4 flex flex-col gap-3"
      >
        {/*  */}
        <section className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Are you absolutely sure?</h1>

          <RiCloseCircleLine
            onClick={closeModal}
            className="text-3xl  cursor-pointer"
          />
        </section>

        <p>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </p>
        <section className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="border-[1px] px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="border-[1px] px-4 py-2 rounded-md bg-black text-white hover:bg-opacity-70 "
          >
            Continue
          </button>
        </section>
      </Modal>
    </>
  );
}
