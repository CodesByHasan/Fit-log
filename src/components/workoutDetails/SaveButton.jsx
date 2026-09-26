"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";

const SaveButton = ({ workout }) => {
  const { saved, setSaved } = useContext(FitLogContext);

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  const handleSave = () => {
    if (alreadySaved) {
      toast.info("Workout is already saved.");
      return;
    }

    setSaved((previousSaved) => [
      ...previousSaved,
      workout,
    ]);

    toast.success("Workout saved for later.");
  };

  return (
    <button
      onClick={handleSave}
      disabled={alreadySaved}
      className="btn btn-outline flex-1"
    >
      {alreadySaved ? "Saved" : "Save for Later"}
    </button>
  );
};

export default SaveButton;