"use client";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F1E7] px-4 sm:px-6">
      <div className="max-w-xl w-full text-center">
        {/* The "error code" -- styled like a dropped signal */}
        <p className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold text-primary leading-none">
          404
        </p>

        {/* Signal-wave style divider -- represents a broken/lost connection */}
        <div className="relative h-3 my-6 sm:my-8">
          <svg
            viewBox="0 0 400 12"
            preserveAspectRatio="none"
            className="w-full h-full text-[#B7C9AE]"
          >
            <polyline
              points="0,6 20,2 40,9 60,3 80,8 100,4 120,10 140,2 160,7 180,3 200,9 220,4 240,8 260,2 280,10 300,4 320,7 340,3 360,9 380,4 400,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#2E2A25] mb-3">
          This message never came through
        </h1>
        <p className="text-sm sm:text-base text-[#5C564C] mb-8 sm:mb-10 px-2">
          We tried reaching this page, but the signal dropped. It might have
          moved, or it never existed. Let's get you reconnected.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline w-full sm:w-fit border-primary text-primary hover:bg-primary hover:text-white"
          >
            Go back
          </button>
          <Link href="/" className="w-full sm:w-fit">
            <button className="btn bg-primary text-white border-none hover:opacity-90 w-full">
              Go home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
