import { useSearchStore } from "../../../search/stores/search.store";
import type { Collection as TCollection } from "../../types";
import { Link } from "../link/Link";

import styles from "./Collection.module.css";

type CollectionProps = { collection: TCollection };

export const Collection = ({ collection }: CollectionProps) => {
  const { id, name, links } = collection;
  const searchFilter = useSearchStore((state) => state.filter);
  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );

  return (
    <li key={id}>
      <h3>{name}</h3>
      <ul className={styles.links}>
        {filteredLinks.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </ul>
    </li>
  );
};
