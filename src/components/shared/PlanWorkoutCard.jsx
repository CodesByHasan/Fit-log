"use client";

import Image from "next/image";
import Link from "next/link";

const PlanWorkoutCard = ({
  workout,
  onRemove,
  onDone,
}) => {
  return (
    <div className="relative flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-200 p-4 sm:flex-row">

      {/* Remove */}
      <button
        onClick={() => onRemove(workout.id)}
        className="btn btn-circle btn-sm absolute right-3 top-3 z-10"
        aria-label="Remove workout"
      >
        ×
      </button>

      {/* Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-52">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">

        <div className="mb-2 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="badge badge-outline"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-base-content/60">
          Equipment: {workout.equipment}
        </p>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-base-content/70">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.calories} cal</span>
          <span>⭐ {workout.rating}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">

          <Link
            href={`/workouts/${workout.id}`}
            className="btn btn-sm btn-outline"
          >
            View Details
          </Link>

          <button
            onClick={() => onDone(workout.id)}
            className="btn btn-sm border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
          >
            Mark as Done
          </button>

        </div>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;