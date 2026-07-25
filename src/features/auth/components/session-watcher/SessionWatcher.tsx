"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSession } from "../../hooks/useSession";

export const SessionWatcher = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isPending } = useSession();

  useEffect(() => {
    if (isLoggedIn && !isPending) {
      navigate("/nest");
    }
  }, [isLoggedIn, isPending, navigate]);

  return null;
};
