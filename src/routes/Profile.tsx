import { ProfileForm } from "../features/user/components/profile-form/ProfileForm";
import { useProfile } from "../features/user/hooks/useProfile";

export const Profile = () => {
  const { profile } = useProfile();

  return profile === null ? null : (
    <>
      <title>Profile • Hedge.gg</title>
      <h1>Profile</h1>
      <ProfileForm profile={profile} />
    </>
  );
};
