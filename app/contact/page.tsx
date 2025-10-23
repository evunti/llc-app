export default function Contact() {
  return (
    <div className=" flex justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-15 font-sans">
      <main className="flex flex-col gap-[10px] row-start-2 items-center">
        <h1 className="text-2xl text-center text-gray-700 font-bold">
          Request a Free Estimate
        </h1>
        <p className="text-lg text-center">
          Ready to restore your furniture or vehicle interior?
        </p>
        <p className="text-center max-w-2xl">
          Contact <span className="font-semibold">GLR Solution</span> in
          Harrisonburg, VA today for a free quote and see why our customers
          trust us for their leather repair and reupholstery needs.
        </p>
        <a
          href="mailto:info@glrsolution.com"
          className="mt-4 px-6 py-3 bg-[#2a2b2b] text-white rounded shadow hover:bg-[#444] transition"
        >
          Email Us
        </a>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
