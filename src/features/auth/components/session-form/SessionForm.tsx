"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/button/Button";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import { useSession } from "../../hooks/useSession";
import styles from "./SessionForm.module.css";

export const SessionForm = () => {
  const { featureFlags } = useFeatureFlags();
  const { isLoggedIn, login, signup } = useSession();

  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });

  const submitForm = (data: { email: string }) => {
    signup(data.email);
  };

  return isLoggedIn ? (
    <div className={styles.wrapper}>
      <p>Already logged in</p>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <Button className={styles.login} onClick={login}>
        Enter Your Nest
      </Button>
      {featureFlags?.ENABLE_REGISTRATION === false && (
        <>
          <p className={styles.divider}>
            <span>Or</span>
          </p>
          <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <label>
              <span>Enter your email</span>
              <input
                autoComplete="email webauthn"
                type="email"
                {...register("email", { required: true })}
              />
            </label>
            <Button type="submit">Build Your Nest</Button>
          </form>
        </>
      )}
    </div>
  );
};
