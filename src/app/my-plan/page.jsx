"use client";

import { useContext, useMemo, useState } from "react";
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

  const [activeTab, setActiveTab] = useState("today");

  const [sortBy, setSortBy] = useState("duration");

  const currentList =
    activeTab === "today" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration) - Number(b.duration);
      }

      if (sortBy === "calories") {
        return Number(b.calories) - Number(a.calories);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return 0;
    });
  }, [currentList, sortBy]);

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.calories || 0),
    0
  );

  const handleRemove = (id) => {
    if (activeTab === "today") {
      setPlan((previousPlan) =>
        previousPlan.filter(
          (workout) => workout.id !== id
        )
      );

      toast.info("Workout removed from your plan.");
    } else {
      setSaved((previousSaved) =>
        previousSaved.filter(
          (workout) => workout.id !== id
        )
      );

      toast.info("Workout removed from saved.");
    }
  };

  const handleDone = (id) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (workout) => workout.id !== id
      )
    );

    toast.success("Workout marked as done.");
  };

  return (
    <main className="container mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
          YOUR WORKOUTS
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">
          My Plan
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-base-content/60">
          Manage your workouts, track today's plan, and keep
          your saved exercises ready for later.
        </p>

      </div>

      {/* Metrics */}
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-base-300 bg-base-200 p-6 text-center">
          <p className="text-3xl font-bold text-[#ccff00]">
            {plan.length}
          </p>

          <p className="mt-1 text-sm text-base-content/60">
            Exercises
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-6 text-center">
          <p className="text-3xl font-bold text-[#ccff00]">
            {totalMinutes}
          </p>

          <p className="mt-1 text-sm text-base-content/60">
            Minutes
          </p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-6 text-center">
          <p className="text-3xl font-bold text-[#ccff00]">
            {totalCalories}
          </p>

          <p className="mt-1 text-sm text-base-content/60">
            Calories
          </p>
        </div>

      </div>

      {/* Tabs + Sort */}
      <div className="mt-12 flex flex-col gap-4 border-b border-base-300 pb-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="tabs tabs-boxed">

          <button
            onClick={() => setActiveTab("today")}
            className={`tab ${
              activeTab === "today"
                ? "tab-active"
                : ""
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab ${
              activeTab === "saved"
                ? "tab-active"
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
            Sort: Duration
          </option>

          <option value="calories">
            Sort: Calories
          </option>

          <option value="rating">
            Sort: Rating
          </option>
        </select>

      </div>

      {/* Loading text requirement */}
      <p className="mt-6 hidden text-sm text-base-content/50">
        Loading workouts…
      </p>

      {/* Workout List */}
      <div className="mt-8 space-y-5">

        {sortedWorkouts.length > 0 ? (
          sortedWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={handleRemove}
              onDone={handleDone}
            />
          ))
        ) : (
          <div className="py-20 text-center">

            <div className="mx-auto max-w-md">

              <p className="text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
                NOTHING HERE YET
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Your workout list is empty
              </h2>

              <p className="mt-3 text-base-content/60">
                Add workouts to today's plan or save exercises
                for later.
              </p>

              <a
                href="/#library"
                className="btn mt-6 border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
              >
                Go to Workouts
              </a>

            </div>
          </div>
        )}

      </div>

    </main>
  );
};

export default MyPlan;