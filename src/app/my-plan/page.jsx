"use client";

import Link from "next/link";
import { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";
import { FitLogContext } from "@/context/FitLogContext";

const MyPlan = () => {
  const {
    plan,
    setPlan,
    saved,
    setSaved,
  } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  const currentWorkouts = useMemo(() => {
    const workouts =
      activeTab === "plan"
        ? plan
        : saved;

    return [...workouts].sort((a, b) => {
      if (sortBy === "calories") {
        return (
          Number(b.caloriesBurned) -
          Number(a.caloriesBurned)
        );
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return (
        Number(a.duration) -
        Number(b.duration)
      );
    });
  }, [
    activeTab,
    plan,
    saved,
    sortBy,
  ]);

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setPlan((previousPlan) =>
        previousPlan.filter(
          (workout) => workout.id !== id
        )
      );

      toast.success(
        "Workout removed from today's plan."
      );
    } else {
      setSaved((previousSaved) =>
        previousSaved.filter(
          (workout) => workout.id !== id
        )
      );

      toast.success(
        "Workout removed from saved."
      );
    }
  };

  const handleDone = (id) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success(
      "Workout marked as done."
    );
  };

  return (
    <main className="container mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
          MY PLAN
        </h1>

        <p className="mt-2 text-base text-base-content/60">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
          <p className="text-sm uppercase tracking-wider text-base-content/50">
            Exercises
          </p>

          <p className="mt-2 text-3xl font-bold">
            {plan.length}
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
          <p className="text-sm uppercase tracking-wider text-base-content/50">
            Minutes
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalMinutes}
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
          <p className="text-sm uppercase tracking-wider text-base-content/50">
            Calories
          </p>

          <p className="mt-2 text-3xl font-bold">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mb-8 flex flex-col gap-4 border-b border-base-300 pb-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="tabs tabs-boxed">
          <button
            onClick={() => setActiveTab("plan")}
            className={`tab ${
              activeTab === "plan"
                ? "tab-active bg-[#ccff00] text-black"
                : ""
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab ${
              activeTab === "saved"
                ? "tab-active bg-[#ccff00] text-black"
                : ""
            }`}
          >
            Saved
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value)
          }
          className="select select-bordered w-full sm:w-48"
        >
          <option value="duration">
            Duration
          </option>

          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>
        </select>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-40 flex-col items-center justify-center gap-3">
          <span className="loading loading-spinner loading-md text-[#ccff00]" />

          <p className="text-base-content/60">
            Loading workouts…
          </p>
        </div>
      ) : currentWorkouts.length === 0 ? (

        /* Empty State */
        <div className="rounded-2xl border border-dashed border-base-300 bg-base-200 px-6 py-16 text-center">

          <h2 className="text-2xl font-extrabold uppercase">
            NOTHING HERE YET
          </h2>

          <p className="mx-auto mt-3 max-w-md text-base-content/60">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="btn mt-6 border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
          >
            Go to workouts
          </Link>
        </div>

      ) : (

        /* Workout List */
        <div className="space-y-5">
          {currentWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={handleRemove}
              onDone={handleDone}
              isSaved={activeTab === "saved"}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlan;