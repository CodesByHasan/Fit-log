const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

        <p className="text-sm uppercase tracking-widest text-base-content/60">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;