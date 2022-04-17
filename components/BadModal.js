import React, { useRef, useEffect, useCallback } from "react";

const BadModal = ({ showBadModal, setShowBadModal }) => {
  const badModalRef = useRef();

  const closeBadModal = (e) => {
    if (badModalRef.current === e.target) {
      setShowBadModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if ((e.key === "Escape") & showBadModal) {
        setShowBadModal(false);
      }
    },
    [setShowBadModal, showBadModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showBadModal ? (
        <div
          ref={badModalRef}
          onClick={closeBadModal}
          className="flex fixed inset-0 h-screen justify-center items-center text-center z-50 bg-zinc-900/80"
        >
          <div className="justify-center bg-black py-12 px-24 border-4 border-[#FF4949] rounded-xl">
            <p className="text-md font-poppins mb-4 text-white">Uh oh!</p>
            <p className="text-sm mb-8">Please enter a valid email!</p>
            <button
              onClick={() => setShowBadModal((prev) => !prev)}
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

export default BadModal;
