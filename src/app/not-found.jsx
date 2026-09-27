import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-6xl font-extrabold">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold">
          Workout Not Found
        </h2>

        <p className="mt-3 max-w-md text-base-content/60">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="btn mt-7 border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
        >
          Go to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;