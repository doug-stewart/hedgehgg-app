import { ProfileForm } from "../features/user/components/profile-form/ProfileForm";
import { useProfile } from "../features/user/hooks/useProfile";

export const Profile = () => {
  const { profile, isSuccess } = useProfile();

  console.log({ profile });

  return isSuccess ? (
    <>
      <title>Profile • Hedge.gg</title>
      <h1>Profile</h1>
      <ProfileForm profile={profile} />
    </>
  ) : null;
};
