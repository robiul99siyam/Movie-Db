"use client";

import { useState } from "react";

export default function Button({ movieUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${
          open
            ? "hidden"
            : "absolute z-50 top-4 right-4 px-5 py-2 bg-blue-500 text-white rounded-full hover:right-10 transform duration-500"
        }`}
      >
        Watch
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 rounded-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ×
            </button>
            <iframe
              width="750"
              height="405"
              src={`https://www.youtube.com/embed/${movieUrl[0].key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
