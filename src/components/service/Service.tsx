import type { Service as TService } from "../../types";

import styles from "./Service.module.css";

type ServiceProps = {
  service: TService;
};

export const Service = ({ service }: ServiceProps) => {
  const { name, href, icon } = service;
  return (
    <li className={styles.service}>
      <a className={styles.link} href={href} rel="noopener noreferrer" title={name}>
        <img alt={`${name} icon`} className={styles.icon} src={icon} />
      </a>
    </li>
  );
};
