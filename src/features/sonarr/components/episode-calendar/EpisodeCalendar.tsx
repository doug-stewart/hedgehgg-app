"use client";

import { Link } from "react-router";
import CalendarIcon from "@/assets/images/calendar.svg?react";
import { AppSection } from "@/components/app-section/AppSection";
import { useProfile } from "@/features/user/hooks/useProfile";
import { useSonarr } from "../../hooks/useSonarr";
import { EpisodeCalendarItem } from "../episode-calendar-item/EpisodeCalendarItem";
import styles from "./EpisodeCalendar.module.css";

export const EpisodeCalendar = () => {
  const { profile } = useProfile();
  const { upcoming, isLoading } = useSonarr();

  const title = (
    <>
      Upcoming Shows{" "}
      <Link rel="noopener" target="_blank" to={profile?.sonarr_url ?? ""}>
        (more)
      </Link>
    </>
  );

  return upcoming.length === 0 ? null : (
    <AppSection icon={<CalendarIcon />} isLoading={isLoading} title={title}>
      <ul className={styles.list}>
        {upcoming.map((episode) => (
          <EpisodeCalendarItem episode={episode} key={episode.id} />
        ))}
      </ul>
    </AppSection>
  );
};
