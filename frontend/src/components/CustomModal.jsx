import React from "react";

const CustomModal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-80 z-50">
      <div className="bg-white rounded-lg p-6 relative w-full max-w-4xl max-h-[90%] overflow-y-auto shadow-lg">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
