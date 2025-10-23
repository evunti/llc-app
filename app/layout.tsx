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
          <div className="flex items-center justify-center mx-auto w-full max-w-[820px]">
            <img
              src="/images/cover.png"
              alt="Cover"
              className="object-contain object-center w-full"
              style={{ maxWidth: "820px", width: "100%", maxHeight: "600px" }}
            />
          </div>
          <div className="relative flex items-center justify-center mx-auto w-full max-w-[820px]">
            <img
              src="/images/circle.png"
              alt="Circle"
              className="hidden sm:block absolute sm:left-0 sm:top-[-120px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] z-40 pointer-events-none"
              style={{ objectFit: "cover" }}
            />
            <NavBar />
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
