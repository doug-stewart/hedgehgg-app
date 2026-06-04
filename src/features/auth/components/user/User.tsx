import { useSession } from "../../hooks/useSession";

export const User = () => {
  const { session, login, logout, signup, isLoggedIn } = useSession();

  return (
    <>
      {isLoggedIn ? (
        <>
          <p>{session.user.id}</p>
          <button onClick={logout} type="button">
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Not logged in</p>
          <button onClick={() => signup("hi@dou.gg")} type="button">
            Sign Up
          </button>
          <button onClick={login} type="button">
            Login
          </button>
        </>
      )}
    </>
  );
};
