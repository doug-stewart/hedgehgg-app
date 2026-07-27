import { AppHeader } from "@/components/app-header/AppHeader";
import { PinnedLinks } from "@/features/linkwarden/components/pinned-links/PinnedLinks";
import { SearchForm } from "@/features/search/components/search-form/SearchForm";
import { EpisodeCalendar } from "@/features/sonarr/components/episode-calendar/EpisodeCalendar";
import { Weather } from "@/features/weather/components/weather/Weather";
import styles from "./Nest.module.css";

export default function Nest() {
  return (
    <>
      <title>Your Nest ⟡ Hedgeh.gg</title>
      <AppHeader />
      <div className={styles.top}>
        <Weather />
      </div>
      <div className={styles.mid}>
        <SearchForm />
        <PinnedLinks />
      </div>
      <div className={styles.bottom}>
        <EpisodeCalendar />
      </div>
    </>
  );
}
