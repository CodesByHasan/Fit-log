import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-base-200">
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10 lg:p-14">

          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT.
              <span className="block text-[#ccff00]">
                LOG EVERY SET.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-base-content/60 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="btn border-0 bg-[#ccff00] px-6 text-black hover:bg-[#b8e600] rounded-2xl"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Banner Image */}
          <div className="relative">
            <Image
              src="/banner.png"
              alt="FitLog workout banner"
              width={900}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

