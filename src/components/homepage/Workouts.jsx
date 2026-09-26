import WorkoutCard from "@/components/shared/WorkoutCard";

const Workouts = async () => {
 const response = await fetch(
  "https://api.abcz.workers.dev/api/fitlog",
  { cache: "no-store" }
);
  const workoutsData = await response.json();

  return (
    <section
      id="library"
      className="container mx-auto my-[70px] px-4"
    >
      {/* Heading */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-base text-base-content/60">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
