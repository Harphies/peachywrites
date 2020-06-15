import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Navigation />
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; peachywrites 2020 &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://peachywrites.com">Peachy Glamour</a>
        </p>
      </footer>
    </div>
  );
};
