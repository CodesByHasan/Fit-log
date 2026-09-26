import WorkoutCard from "@/components/shared/WorkoutCard";

const getWorkouts = async () => {
  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching workouts:", error);

    return [];
  }
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section
      id="library"
      className="container mx-auto my-[70px] px-4"
    >

      {/* Heading */}
      <div className="mb-10 text-center">

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
          THE LIBRARY
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Find Your Next Workout
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
          Browse focused workouts built for strength, conditioning, and
          everyday progress.
        </p>

      </div>

      {/* Workout Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {workoutsData.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}

      </div>
    </section>
  );
};

export default Workouts;
