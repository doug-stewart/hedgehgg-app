import type { ErrorContext } from "better-auth/client";
import { authClient } from "../lib/auth-client";

export const useSessions = () => {
  const { data: session, isPending, refetch } = authClient.useSession();

  const login = async () => {
    let result: ErrorContext | undefined;

    await authClient.signIn.passkey({
      fetchOptions: {
        async onSuccess() {
          await refetch();
        },
        onError(context) {
          result = context;
        },
      },
    });

    return result;
  };

  const signup = async (email: string) => {
    let result: ErrorContext | undefined;

    await authClient.passkey.addPasskey({
      name: "Primary Passkey",
      context: email,
      fetchOptions: {
        async onSuccess() {
          await refetch();
        },
        onError(context) {
          result = context;
        },
      },
    });

    return result;
  };

  const logout = async () => {
    await authClient.signOut();
  };

  return { session, login, logout, signup, isPending };
};
