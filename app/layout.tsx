import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          className=" flex
         gap-6"
        >
          <div>About</div>
          <div>Gallery</div>
          <div>Contact</div>
        </nav>
        {children}
      </body>
      <footer>
        &copy; {new Date().getFullYear()} Evunti Photography |
        <a
          href="https://instagram.com/zhenya.untilova"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#405de6", textDecoration: "none", marginLeft: 6 }}
        >
          Instagram
        </a>
      </footer>
    </html>
  );
}
