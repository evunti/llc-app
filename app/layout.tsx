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
            <div className="w-full max-w-[820px] flex flex-col sm:flex-row items-center sm:items-center justify-between px-4 gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/images/circle.png"
                  alt="Circle"
                  className="hidden sm:block w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] pointer-events-none"
                  style={{ objectFit: "cover" }}
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm sm:text-base md:text-lg font-extrabold tracking-wider text-[#171717] uppercase">
                      Great Leather Repair
                    </h1>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Furniture repair & reupholstery
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-semibold text-gray-800">
                  (540) 438-9283
                </div>
                <div className="text-sm text-gray-800">
                  info@glrsolution.com
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <img
              src="/images/cover.png"
              alt="Cover"
              className="w-full object-contain object-top h-auto max-h-screen"
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
