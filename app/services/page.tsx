"use client";

export default function Services() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mb-4">We proudly offer professional leather and upholstery repair for vehicles, furniture, and more, including:</p>
        <ul className="list-disc pl-6 max-w-2xl space-y-2">
          <li><strong>Crack and Tear Repair</strong> – Smooth, invisible fixes for splits, scuffs, and punctures.</li>
          <li><strong>Color Restoration and Re-Dyeing</strong> – Refresh faded or worn leather with perfectly matched color.</li>
          <li><strong>Reupholstery Services</strong> – Replace worn-out or damaged fabric and leather with precision craftsmanship.</li>
          <li><strong>Surface Refinishing</strong> – Repair and refinish leather for a consistent, factory-quality appearance.</li>
          <li><strong>Cleaning and Conditioning</strong> – Deep clean and protect your materials to extend their life.</li>
        </ul>
        <p className="max-w-2xl mt-4">Whether it’s a cherished family armchair or your car’s leather seats, we deliver exceptional results that restore both function and style.</p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
