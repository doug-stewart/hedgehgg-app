"use client";

import { useForm } from "react-hook-form";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import { useSession } from "../../hooks/useSession";

export const SessionForm = () => {
  const { featureFlags } = useFeatureFlags();
  const { isLoggedIn, login, signup } = useSession();

  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });

  const submitForm = (data: { email: string }) => {
    signup(data.email);
  };

  return isLoggedIn ? (
    <p>Already logged in</p>
  ) : (
    <div>
      <button onClick={login} type="button">
        Login
      </button>
      {featureFlags?.ENABLE_REGISTRATION && (
        <>
          <p>Or</p>
          <form onSubmit={handleSubmit(submitForm)}>
            <label>
              <span>Email</span>
              <input
                autoComplete="email webauthn"
                type="email"
                {...register("email", { required: true })}
              />
            </label>
            <button type="submit">Signup</button>
          </form>
        </>
      )}
    </div>
  );
};
