import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-base-300">

        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={500}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute left-4 top-4 rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {workout.difficulty}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          <span className="text-[#ccff00]">★</span>
          {workout.rating}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">

          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="badge badge-outline"
            >
              {group}
            </span>
          ))}

        </div>

        {/* Name */}
        <h3 className="line-clamp-1 text-xl font-bold text-white transition-colors group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-base-content/60">
          Equipment:{" "}
          <span className="font-medium text-base-content">
            {workout.equipment}
          </span>
        </p>

        {/* Stats */}
        <div className="my-5 grid grid-cols-3 border-y border-base-300 py-3 text-center">

          <div>
            <p className="text-sm font-bold">
              {workout.duration}
            </p>

            <p className="text-xs text-base-content/50">
              Min
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">
              {workout.caloriesBurned}
            </p>

            <p className="text-xs text-base-content/50">
              Cal
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">
              {workout.sets}
            </p>

            <p className="text-xs text-base-content/50">
              Sets
            </p>
          </div>

        </div>

        {/* Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="btn w-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
};

export default WorkoutCard;