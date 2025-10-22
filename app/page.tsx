"use client";

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[10px] row-start-2 items-center ">
          <h2 className="text-2xl text-center text-gray-700">
            Expert Leather Repair & Reupholstery
          </h2>
          <p className="text-lg text-center">
            Bring Your Leather and Upholstery Back to Life
          </p>
          <p className="text-center max-w-2xl">
            At GRL Solution, we specialize in restoring the comfort, beauty, and
            value of your leather and upholstered furniture or vehicle
            interiors. From faded car seats to torn sofas, we provide meticulous
            repair, restoration, and reupholstery services tailored to your
            needs. Our goal is simple — to make your furniture and interiors
            look and feel like new again.
          </p>
          <a
            href="/contact"
            className="mt-4 px-6 py-3 bg-[#2a2b2b] text-white rounded shadow hover:bg-[#444] transition"
          >
            Request a Free Estimate
          </a>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
