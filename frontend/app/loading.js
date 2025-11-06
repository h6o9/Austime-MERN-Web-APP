// app/loading.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 flex justify-center items-center z-50">
      <div className="border-t-4 border-blue-600 w-16 h-16 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default function Loading() {
  return <LoadingSpinner />;
}
