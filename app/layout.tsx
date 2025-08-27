import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        <nav className="absolute top-0 right-0 mt-6 mr-8 flex gap-6 items-end">
          <div>About</div>
          <div>Gallery</div>
          <div>Contact</div>
        </nav>
        <div className="flex-1">{children}</div>
      </body>
      <footer className="w-full flex justify-center items-center py-6 text-center">
        &copy; {new Date().getFullYear()} Evunti Photography |
        <a
          href="https://instagram.com/zhenya.untilova"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline"
        >
          Instagram
        </a>
      </footer>
    </html>
  );
}
