"use client";

import React from "react";
import { Sparkle } from "lucide-react";
import { useDispatch } from "react-redux";
import { insertFavourite } from "@/Redux/slices/favouritesReducer";
import toast from "react-hot-toast";
import { AppDispatch } from "@/Redux/store";

const DropToFavIcon = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    if (data) {
      try {
        const draggedData = JSON.parse(data);
        dispatch(insertFavourite({ type: draggedData.type, item: draggedData.item }));
        toast.success("Added to favourites");
      } catch {
        toast.error("Invalid data dropped");
      }
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="p-2 border border-yellow-400 rounded-full cursor-pointer"
      title="Drop to favourite"
    >
      <Sparkle className="text-yellow-500" />
    </div>
  );
};

export default DropToFavIcon;