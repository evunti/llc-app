"use client";

export default function Services() {
  return (
    <div className="font-sans min-h-screen bg-white p-4 pb-12 sm:p-20 flex flex-col items-center justify-center">
      <main className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          Our Services
        </h1>
        <div className="h-0.5 w-10 sm:w-16 bg-[#cda632] mx-auto mb-6 sm:mb-8"></div>
        <p className="max-w-2xl mb-6 sm:mb-8 text-base sm:text-lg text-center text-gray-700">
          We proudly offer professional leather and upholstery repair for
          vehicles, furniture, and more, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full mb-6 sm:mb-8">
          <div className="bg-white rounded border border-gray-200 p-4 sm:p-6 flex flex-col items-start">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2a2b2b]">
              Crack and Tear Repair
            </h2>
            <p className="text-[#cda632]">
              Smooth, invisible fixes for splits, scuffs, and punctures.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-200 p-4 sm:p-6 flex flex-col items-start">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2a2b2b]">
              Color Restoration and Re-Dyeing
            </h2>
            <p className="text-[#cda632]">
              Refresh faded or worn leather with perfectly matched color.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-200 p-4 sm:p-6 flex flex-col items-start">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2a2b2b]">
              Reupholstery Services
            </h2>
            <p className="text-[#cda632]">
              Replace worn-out or damaged fabric and leather with precision
              craftsmanship.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-200 p-4 sm:p-6 flex flex-col items-start">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2a2b2b]">
              Surface Refinishing
            </h2>
            <p className="text-[#cda632]">
              Repair and refinish leather for a consistent, factory-quality
              appearance.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-200 p-4 sm:p-6 flex flex-col items-start md:col-span-2">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2a2b2b]">
              Cleaning and Conditioning
            </h2>
            <p className="text-[#cda632]">
              Deep clean and protect your materials to extend their life.
            </p>
          </div>
        </div>
        <p className="max-w-2xl text-center text-gray-700 text-base sm:text-lg">
          Whether it’s a cherished family armchair or your car’s leather seats,
          we deliver exceptional results that restore both function and style.
        </p>
      </main>
      <footer className="mt-8 sm:mt-12 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
