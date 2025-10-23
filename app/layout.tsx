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
          <div className="w-full flex items-center justify-center mx-auto">
            <img
              src="/images/cover.png"
              alt="Cover"
              className="w-full object-contain object-center"
              style={{ maxWidth: "1500px", maxHeight: "600px" }}
            />
          </div>
          <div className="relative w-full flex items-center justify-center mx-auto max-w-[1500px]">
            <img
              src="/images/circle.png"
              alt="Circle"
              className="hidden sm:block absolute -top-60 -left-0 w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] z-40 pointer-events-none"
              style={{ objectFit: "cover" }}
            />
            <NavBar />
          </div>
          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="bg-white w-full max-w-[1500px] shadow-md p-4 sm:p-8 min-h-[400px] mx-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
      <div className="w-full flex justify-center items-center py-4">
        <div className="w-full max-w-md text-center">
          <p className="text-base text-gray-800 font-semibold mb-0.5">
            Contact Us
          </p>

          <span className="text-base text-gray-800"></span>
          <p className="text-base text-gray-800 font-medium  ">
            Email us at info@glrsolution.com or Call (555) 123-4567
          </p>
        </div>
      </div>
      <footer className="w-full flex justify-center items-center py-6 text-center gap-1.5">
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
