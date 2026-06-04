import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSession } from "../features/auth/hooks/useSession";

export const Home = () => {
  const { isLoggedIn, isPending } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && !isPending) {
      navigate("/nest");
    }
  }, [isLoggedIn, isPending, navigate]);

  return (
    <>
      <title>Hedge.gg</title>
      <h1>Home</h1>
    </>
  );
};
