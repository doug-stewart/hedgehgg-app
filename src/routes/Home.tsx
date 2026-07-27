import Hedgehgg from "@/assets/images/hedgehgg.svg?react";
import { SessionForm } from "@/features/auth/components/session-form/SessionForm";
import { SessionWatcher } from "@/features/auth/components/session-watcher/SessionWatcher";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <title>Hedgeh.gg</title>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Hedgehgg role="presentation" />
          <h1>Hedgeh.gg</h1>
          <p>Build your nest!</p>
        </header>
        <SessionForm />
        <SessionWatcher />
      </div>
    </>
  );
}
