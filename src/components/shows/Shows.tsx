import { format } from "date-fns";
import { useSonarr } from "../../hooks/useSonarr";

export const Shows = () => {
  const { upcoming } = useSonarr();

  return (
    <section>
      <h2>Upcoming Shows</h2>
      <ol>
        {upcoming?.map(({ id, title, series, seasonNumber, episodeNumber, airingAt }) => (
          <li key={id}>
            <strong>{title}</strong>
            <em>{series}</em>
            <time dateTime={airingAt}>{format(airingAt, "eee, MMM do @ HH:mm")}</time>
            <span>
              s{seasonNumber}e{episodeNumber}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};
