import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext

const Navbar = () => {
  const { token, logout } = useContext(AuthContext); // Use context to get the token and logout function

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Blog
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {/* me-auto makes the left side of navbar auto */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>

        {/* ms-auto pushes these items to the right */}
        <ul className="navbar-nav ms-auto">
          {/* Only show Login button if no token is present */}
          {!token ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          ) : (
            <>
              {/* Show Create Post and Logout if token is present */}
              <li className="nav-item">
                <Link className="nav-link" to="/create-post">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
