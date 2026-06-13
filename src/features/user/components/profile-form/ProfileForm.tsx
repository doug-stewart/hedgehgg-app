"use no memo";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type * as z from "zod";
import { profileSchema } from "../../helpers/profileSchema";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
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
    setValue,
    formState: { errors },
  } = useForm<ProfileInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(profileSchema),
    defaultValues: initial,
  });

  const updateProfile = useUpdateProfile();

  const onSubmit: SubmitHandler<ProfileInputs> = async (data) => {
    if (!profile || profile.id === null) return;

    const newProfile = {
      id: profile.id,
      geolocation_latitude: data.geolocation_latitude ?? "",
      geolocation_longitude: data.geolocation_longitude ?? "",
      linkwarden_token: data.linkwarden_token ?? "",
      linkwarden_url: data.linkwarden_url ?? "",
      sonarr_api_key: data.sonarr_api_key ?? "",
      sonarr_url: data.sonarr_url ?? "",
    };

    await updateProfile.mutateAsync(newProfile);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = String(position.coords.latitude);
      latitude = latitude.slice(0, latitude.indexOf(".") + 8);

      let longitude = String(position.coords.longitude);
      longitude = longitude.slice(0, longitude.indexOf(".") + 8);

      setValue("geolocation_latitude", latitude);
      setValue("geolocation_longitude", longitude);
    });
  };

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

        <button onClick={getLocation} type="button">
          Get Current Location
        </button>
      </fieldset>
      <button type="submit">Update</button>
    </form>
  );
};
