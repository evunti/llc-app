export default function Contact() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-16">
      <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
          Request a Free Estimate
        </h1>
        <div className="h-1 w-16 bg-[#2a2b2b] rounded mx-auto mb-6"></div>
        <p className="mb-4 text-lg text-gray-700 text-center">
          Ready to restore your furniture or vehicle interior?
        </p>
        <p className="mb-8 text-gray-600 text-center">
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          Contact <span className="font-semibold">GRL Solution</span> in
          Harrisonburg, VA today for a free quote and see why our customers
          trust us for their leather repair and reupholstery needs.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:info@grlsolution.com"
            className="inline-block px-8 py-3 bg-[#2a2b2b] text-white font-semibold rounded-lg shadow hover:bg-[#444] transition-colors duration-200 text-lg"
          >
            Email Us
          </a>
        </div>
        {/*
        <form className="mt-8 space-y-4">
          <input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a2b2b]" placeholder="Your Name" />
          <input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a2b2b]" placeholder="Your Email" />
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2a2b2b]" placeholder="How can we help you?" rows={4} />
          <button type="submit" className="w-full bg-[#2a2b2b] text-white font-semibold rounded-lg py-3 hover:bg-[#444] transition-colors duration-200">Send Message</button>
        </form>
        */}
      </div>
    </main>
  );
}
