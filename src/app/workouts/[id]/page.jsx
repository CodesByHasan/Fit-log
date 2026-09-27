import Image from "next/image";
import { notFound } from "next/navigation";

import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";

const getWorkout = async (id) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">

      {/* Main Details */}
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-base-200">
          <Image
            src={workout.image}
            alt={workout.name}
            width={900}
            height={700}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>

        {/* Information */}
        <div>

          {/* Categories */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-outline uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold uppercase md:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 text-base leading-7 text-base-content/60">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-base-300">

            <div className="border-b border-base-300 bg-base-200 px-5 py-4">
              <h2 className="font-bold uppercase tracking-wider">
                Key Specs
              </h2>
            </div>

            <div className="divide-y divide-base-300">

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  EQUIPMENT
                </span>

                <span className="text-right font-medium">
                  {workout.equipment}
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  DIFFICULTY
                </span>

                <span className="text-right font-medium">
                  {workout.difficulty}
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  SETS
                </span>

                <span className="text-right font-medium">
                  {workout.sets}
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  REPS
                </span>

                <span className="text-right font-medium">
                  {workout.reps}
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  DURATION
                </span>

                <span className="text-right font-medium">
                  {workout.duration} min
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  CALORIES
                </span>

                <span className="text-right font-medium">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 py-4">
                <span className="text-sm text-base-content/50">
                  RATING
                </span>

                <span className="text-right font-medium">
                  ⭐ {workout.rating}
                </span>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <section className="mt-16">
        <h2 className="text-3xl font-extrabold uppercase">
          INSTRUCTIONS
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {workout.instructions?.slice(0, 4).map(
            (instruction, index) => (
              <div
                key={index}
                className="rounded-2xl border border-base-300 bg-base-200 p-5"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-base-content/70">
                    {instruction}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;