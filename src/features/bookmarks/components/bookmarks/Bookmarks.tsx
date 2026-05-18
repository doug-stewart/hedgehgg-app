import { useLinkwarden } from "../../hooks/useLinkwarden";
import { Collection } from "../collection/Collection";
import styles from "./Bookmarks.module.css";

export const Bookmarks = () => {
  const { bookmarks, isLoading } = useLinkwarden();

  return (
    <section>
      <h2>Bookmarks</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.bookmarks}>
          {bookmarks
            ?.sort((a, b) => (a.name === "Unorganized" ? -1 : a.name.localeCompare(b.name)))
            .map((collection) => (
              <Collection collection={collection} key={collection.id} />
            ))}
        </ul>
      )}
    </section>
  );
};
