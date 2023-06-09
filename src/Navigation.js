import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./Navigation.css"



/** Navigation bar with links for Jobly
 *
 *
 * App -> Navigation
 *
 */

function Navigation({logout}) {
  const { currUser } = useContext(userContext);

  return (
    <nav className="NavBar">
      <NavLink to="/" end>
       <h2> Yard Hoppers</h2>
      </NavLink>
      <NavLink to="/listings" end>
            Listings
          </NavLink>
      {!currUser &&
        <div className="no-curr-user">
          <NavLink to="/login" end>
          Login
          </NavLink>
          <NavLink to="/signup" end>
            Sign Up
          </NavLink>
        </div>
        }

{currUser &&
        <div className="yes-curr-user">
          <NavLink to="/new-listing" end>
            Create a Listing
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>
          <NavLink to="/" onClick={logout} end>
            Log out {currUser.username}
          </NavLink>
        </div>
        }
    </nav>
  );
}

export default Navigation;