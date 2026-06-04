"use no memo";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type * as z from "zod";
import { profileSchema } from "../../helpers/profileSchema";
import type { User } from "../../types";
import styles from "./ProfileForm.module.css";

type ProfileInputs = z.infer<typeof profileSchema>;

export const ProfileForm = ({ profile }: { profile: User }) => {
  const initial = {
    geolocation_latitude: profile?.geolocation_latitude ?? "",
    geolocation_longitude: profile?.geolocation_longitude ?? "",
    linkwarden_token: profile?.linkwarden_token ?? "",
    linkwarden_url: profile?.linkwarden_url ?? "",
    sonarr_api_key: profile?.sonarr_api_key ?? "",
    sonarr_url: profile?.sonarr_url ?? "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(profileSchema),
    defaultValues: initial,
  });

  const onSubmit: SubmitHandler<ProfileInputs> = (data) => console.log(data);

  return profile === null ? null : (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <legend>Linkwarden</legend>
        <label className={styles.field}>
          <span>Token</span>
          <input {...register("linkwarden_token")} />
          {errors.linkwarden_token && (
            <span className={styles.error}>{errors.linkwarden_token.message}</span>
          )}
        </label>
        <label className={styles.field}>
          <span>URL</span>
          <input {...register("linkwarden_url")} />
          {errors.linkwarden_url && (
            <span className={styles.error}>{errors.linkwarden_url.message}</span>
          )}
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>Sonarr</legend>
        <label className={styles.field}>
          <span>API Key</span>
          <input {...register("sonarr_api_key")} />
          {errors.sonarr_api_key && (
            <span className={styles.error}>{errors.sonarr_api_key.message}</span>
          )}
        </label>
        <label className={styles.field}>
          <span>URL</span>
          <input {...register("sonarr_url")} />
          {errors.sonarr_url && <span className={styles.error}>{errors.sonarr_url.message}</span>}
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>Geolocation</legend>
        <label className={styles.field}>
          <span>Latitude</span>
          <input {...register("geolocation_latitude")} />
          {errors.geolocation_latitude && (
            <span className={styles.error}>{errors.geolocation_latitude.message}</span>
          )}
        </label>
        <label className={styles.field}>
          <span>Longitude</span>
          <input {...register("geolocation_longitude")} />
          {errors.geolocation_longitude && (
            <span className={styles.error}>{errors.geolocation_longitude.message}</span>
          )}
        </label>
      </fieldset>
      <button type="submit">Update</button>
    </form>
  );
};
