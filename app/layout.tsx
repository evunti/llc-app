import "/app/globals.css";
import { NavBar } from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ededed] min-h-screen w-full m-0 p-0">
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="relative w-full overflow-hidden">
              <img
                src="/images/cover.png"
                alt="Cover"
                className="w-full object-cover object-center h-[38vh] sm:h-[48vh] md:h-[56vh]"
              />
              <div
                className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 bg-[#cda632]/60 text-[#171717] px-3 sm:px-6 py-2 sm:py-3 z-50 rounded-md shadow-sm"
                style={{
                  backdropFilter: "saturate(110%) blur(1px)",
                  background:
                    "linear-gradient(180deg, rgba(205,166,50,0.6), rgba(184,134,42,0.6))",
                }}
              >
                <div className="font-extrabold text-sm sm:text-lg leading-tight">
                  GLR Solution
                </div>
                <div className="text-xs sm:text-sm leading-tight">
                  Leather Furniture Repair & Reupholstry
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <img
                src="/images/circle.png"
                alt="Circle"
                className="hidden sm:block absolute sm:left-6 sm:top-[-260px] sm:w-[240px] sm:h-[240px] md:left-10 md:w-[320px] md:h-[320px] lg:left-14 lg:w-[400px] lg:h-[400px] z-60 pointer-events-none"
                style={{ objectFit: "cover" }}
              />
              <div className="w-full">
                <NavBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[820px]">
            <div
              className="bg-white w-full shadow-md p-2 sm:p-4 md:p-8 min-h-[400px] mx-auto"
              style={{ maxWidth: "820px", width: "100%" }}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
      <div className="flex justify-center items-center py-4 mx-auto w-full max-w-[820px]">
        <div className="w-full max-w-md text-center mx-auto">
          <p className="text-base text-gray-800 font-semibold mb-0.5">
            Contact Us
          </p>

          <span className="text-base text-gray-800"></span>
          <p className="text-base text-gray-800 font-medium  ">
            Email us at info@glrsolution.com or Call (555) 123-4567
          </p>
        </div>
      </div>
      <footer className="flex justify-center items-center py-6 text-center gap-1.5 mx-auto w-full max-w-[820px]">
        &copy; {new Date().getFullYear()} LLC <p>|</p>
        <a
          href="https://www.instagram.com/glr_solution/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline"
        >
          Instagram
        </a>{" "}
        <p>|</p>
        <a
          href="https://www.instagram.com/glr_solution/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline"
        >
          Facebook
        </a>
      </footer>
    </html>
  );
}
