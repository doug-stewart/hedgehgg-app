import { NavLink } from "react-router";
import Hedgehgg from "../../../../assets/images/hedgehgg.svg?react";
import { useSession } from "../../hooks/useSession";

export const UserHeader = () => {
  const { login, logout, signup, isLoggedIn } = useSession();

  return (
    <header>
      <h1>
        <Hedgehgg title="Hedgehgg" />
      </h1>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/nest">Your Nest</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Settings</NavLink>
              </li>
              <li>
                <button onClick={logout} type="button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={() => signup("hi@dou.gg")} type="button">
                  Sign Up
                </button>
              </li>
              <li>
                <button onClick={login} type="button">
                  Login
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
