import "/app/globals.css";
import { NavBar } from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div
            className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: "url(/images/cover.png)" }}
          ></div>
          <div className="relative">
            <img
              src="/images/circle.png"
              alt="Circle"
              className="absolute -top-60 -left-0 w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] z-40 pointer-events-none"
              style={{ objectFit: "cover" }}
            />
            <NavBar />
          </div>
          {children}
        </div>
      </body>
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
