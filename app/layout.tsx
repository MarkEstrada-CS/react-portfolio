// app/layout.tsx
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my online portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold">My Portfolio</h1> */}
          <nav className="ml-auto"> {/* Add ml-auto to push the nav to the right */}
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </header>
        <main>{children}</main> {/* Ensure children are wrapped in a <main> element */}
      </body>
    </html>
  );
}
