import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {/* Header Section */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {children}{" "}
        {/* This is where the content passed into the Layout will be rendered */}
      </main>

      <footer>
        <p>&copy; 2025 Your Website</p>
      </footer>
    </div>
  );
};
