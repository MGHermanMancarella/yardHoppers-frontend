import { NavLink } from "react-router-dom";
import "./Navigation.css"

/** Navigation bar with links for Jobly
 *
 *
 * App -> Navigation
 *
 */

function Navigation() {

  return (
    <nav className="NavBar">
      <NavLink to="/" end>
       <h2> Yard Hoppers</h2>
      </NavLink>
        <div className="no-curr-user">
          <NavLink to="/login" end>
          Login
          </NavLink>
          <NavLink to="/signup" end>
            Sign Up
          </NavLink>
          <NavLink to="/listings" end>
            Listings
          </NavLink>
        </div>


        <div className="yes-curr-user">
          <NavLink to="/new-listing" end>
            Create a Listing
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>

        </div>
    </nav>
  );
}

export default Navigation;