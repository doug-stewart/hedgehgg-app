import { format } from "date-fns";
import { useSonarr } from "../../hooks/useSonarr";
import styles from "./Shows.module.css";

export const Shows = () => {
  const { upcoming } = useSonarr();

  return (
    <section>
      <h2>Upcoming Shows</h2>
      <table className={styles.shows}>
        <thead>
          <tr>
            <th>Series</th>
            <th>Title</th>
            <th>Airing</th>
          </tr>
        </thead>
        <tbody>
          {upcoming?.map(
            ({ id, title, series, seasonNumber, episodeNumber, airingAt }) => (
              <tr key={id}>
                <td>{series}</td>
                <td>
                  <span>
                    s{seasonNumber}e{String(episodeNumber).padStart(2, "0")}
                  </span>
                  {title}
                </td>
                <td>
                  <time dateTime={airingAt}>
                    {format(airingAt, "eee, MMM do @ HH:mm")}
                  </time>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </section>
  );
};
