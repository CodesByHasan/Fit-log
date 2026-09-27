import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="group h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-base-300">
          <Image
            src={workout.image}
            alt={workout.name}
            width={740}
            height={500}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur">
            {workout.difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="badge badge-outline uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="line-clamp-1 text-xl font-bold uppercase text-white transition-colors group-hover:text-[#ccff00]">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-base-content/60">
            Equipment:{" "}
            <span className="font-medium text-base-content">
              {workout.equipment}
            </span>
          </p>

          {/* Stats */}
          <div className="my-5 grid grid-cols-3 border-y border-base-300 py-4">
            <div className="flex flex-col items-center gap-1 border-r border-base-300">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>⏱</span>
                <span>{workout.duration} min</span>
              </div>

              <span className="text-xs text-base-content/50">
                DURATION
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 border-r border-base-300">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>🔥</span>
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <span className="text-xs text-base-content/50">
                CALORIES
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>⭐</span>
                <span>{workout.rating}</span>
              </div>

              <span className="text-xs text-base-content/50">
                RATING
              </span>
            </div>
          </div>

          <div className="btn w-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]">
            View Details →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;