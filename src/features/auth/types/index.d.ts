import type { SessionResponse } from "better-auth/client";

export type Session = NonNullable<SessionResponse["session"]>;

export type BaseSessionResult = {
  isPending: boolean;
  refetch: () => void;
  login: () => Promise<void>;
  signup: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

export type LoggedInSessionResult = BaseSessionResult & {
  isLoggedIn: true;
  session: Session;
};

export type LoggedOutSessionResult = BaseSessionResult & {
  isLoggedIn: false;
  session: null;
};

export type SessionResult = LoggedInSessionResult | LoggedOutSessionResult;
