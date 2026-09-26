import Image from "next/image";

import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";

const getWorkout = async (id) => {
  try {
    const response = await fetch(
  `https://api.api-store.workers.dev/api/fitlog/${id}`,
  { cache: "no-store" }
  );

    if (!response.ok) {
      throw new Error("Workout not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching workout:", error);

    return null;
  }
};

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Workout Not Found
          </h2>

          <p className="mt-2 text-base-content/60">
            The workout you are looking for does not exist.
          </p>
        </div>
      </div>
    );
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
            width={1000}
            height={700}
            className="h-full max-h-[600px] w-full object-cover"
            priority
          />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-center">

          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-outline"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-base-content/60">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="my-8 overflow-hidden rounded-2xl border border-base-300">

            <div className="grid grid-cols-2 border-b border-base-300">
              <div className="p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Equipment
                </p>

                <p className="mt-1 font-semibold">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-l border-base-300 p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Difficulty
                </p>

                <p className="mt-1 font-semibold">
                  {workout.difficulty}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-base-300">
              <div className="p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Sets
                </p>

                <p className="mt-1 font-semibold">
                  {workout.sets}
                </p>
              </div>

              <div className="border-l border-base-300 p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Reps
                </p>

                <p className="mt-1 font-semibold">
                  {workout.reps}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Duration
                </p>

                <p className="mt-1 font-semibold">
                  {workout.duration}
                </p>
              </div>

              <div className="border-l border-base-300 p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Calories
                </p>

                <p className="mt-1 font-semibold">
                  {workout.calories}
                </p>
              </div>

              <div className="border-l border-base-300 p-4">
                <p className="text-xs uppercase text-base-content/50">
                  Rating
                </p>

                <p className="mt-1 font-semibold">
                  ★ {workout.rating}
                </p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <AddToPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>

        </div>
      </div>

      {/* Instructions */}
      <section className="mt-16">

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
          HOW TO DO IT
        </p>

        <h2 className="text-3xl font-bold">
          Instructions
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {workout.instructions?.map((instruction, index) => (
            <div
              key={index}
              className="rounded-2xl border border-base-300 bg-base-200 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                {index + 1}
              </div>

              <p className="leading-7 text-base-content/70">
                {instruction}
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default WorkoutDetails;