"use client";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold mb-4">Why Choose GRL Solution</h1>
        <p className="max-w-2xl">
          Based in Harrisonburg, Virginia, GRL Solution is trusted for our attention to detail, quality materials, and professional service. We combine craftsmanship with modern repair technology to ensure every job meets the highest standards. Our team treats each project—large or small—with care and precision, earning us a reputation for reliable, long-lasting repairs.
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
