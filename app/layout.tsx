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
          <NavBar />

          <div className="w-full flex justify-center mt-2 mb-2">
            <img
              src="/images/circle.png"
              alt="Circle"
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] pointer-events-none"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="relative w-full overflow-hidden">
            <img
              src="/images/cover.png"
              alt="Cover"
              className="w-full object-cover object-top h-[28vh] sm:h-[48vh] md:h-[56vh]"
            />
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
