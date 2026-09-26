import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";

const getWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      <Banner />

      <Workouts workouts={workouts} />
    </main>
  );
};

export default HomePage;
