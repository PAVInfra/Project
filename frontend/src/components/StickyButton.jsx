import { useState, useRef } from "react";
import Msg from "./Msg";
import CustomModal from "./CustomModal";

const StickyButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const buttonRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [relPosition, setRelPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    setRelPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - relPosition.x,
      y: e.clientY - relPosition.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleClick = () => {
    setShowModal((prev) => !prev); // Toggle modal visibility
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        ref={buttonRef}
        className="fixed bottom-5 right-5 w-20 h-10 bg-sky-500 text-white rounded-md shadow-md cursor-grab opacity-90 transform transition duration-300 ease-in-out hover:bg-blue-600 active:cursor-grabbing z-50"
        style={{ left: "auto", top: "auto" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
      >
        Enquire
      </button>

      <CustomModal show={showModal} handleClose={handleCloseModal}>
        <Msg handleSubmit={handleCloseModal} />
      </CustomModal>
    </div>
  );
};

export default StickyButton;
