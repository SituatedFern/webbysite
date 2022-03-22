import React, { useRef, useEffect, useCallback } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if ((e.key === "Escape") & showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="flex fixed inset-0 h-screen justify-center items-center text-center z-50 bg-zinc-900/80"
        >
          <div className="justify-center bg-black py-12 px-24 border-4 border-sky-500 rounded-xl">
            <p className="text-md font-poppins mb-4 text-white">Submitted</p>
            <p className="text-sm mb-8">Thanks for joining!</p>
            <button
              onClick={() => setShowModal((prev) => !prev)}
              className="rounded px-4 py-2 text-sm text-black bg-[#FF4949]"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
