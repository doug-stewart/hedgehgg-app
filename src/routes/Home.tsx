import Hedgehgg from "@/assets/images/hedgehgg.svg?react";
import { SessionForm } from "@/features/auth/components/session-form/SessionForm";
import { SessionWatcher } from "@/features/auth/components/session-watcher/SessionWatcher";

export default function Home() {
  return (
    <>
      <title>Hedge.gg</title>
      <header>
        <Hedgehgg role="presentation" />
        <h1>Hedge.hgg</h1>
        <p>Build your nest!</p>
      </header>
      <SessionForm />
      <SessionWatcher />
    </>
  );
}
