"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";

const AddToPlanButton = ({ workout }) => {
  const { plan, setPlan } = useContext(FitLogContext);

  const alreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {
    if (alreadyAdded) {
      toast.info("Workout is already in your plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.warning("You can add maximum 5 workouts to your plan.");
      return;
    }

    setPlan((previousPlan) => [
      ...previousPlan,
      workout,
    ]);

    toast.success("Workout added to today's plan.");
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={alreadyAdded}
      className="btn flex-1 border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
    >
      {alreadyAdded ? "Added to Plan" : "Add to Today's Plan"}
    </button>
  );
};

export default AddToPlanButton;