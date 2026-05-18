import type { Collection as TCollection } from "../../types";
import { Link } from "../link/Link";

import styles from "./Collection.module.css";

type CollectionProps = { collection: TCollection };

export const Collection = ({ collection }: CollectionProps) => {
  const { id, name, links } = collection;
  return (
    <li key={id}>
      <h3>{name}</h3>
      <ul className={styles.links}>
        {links
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((link) => (
            <Link key={link.id} link={link} />
          ))}
      </ul>
    </li>
  );
};
