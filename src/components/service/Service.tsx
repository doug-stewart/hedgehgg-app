import { useRef } from "react";
import type { Service as TService } from "../../types";

import styles from "./Service.module.css";

type ServiceProps = {
  service: TService;
};

export const Service = ({ service }: ServiceProps) => {
  const tooltip = useRef<HTMLSpanElement>(null);
  const { name, href, icon, abbr } = service;

  const toggleTooltip = () => {
    tooltip?.current?.togglePopover();
  };

  return (
    <li className={styles.service}>
      <a
        className={styles.link}
        href={href}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
        popoverTarget={`service-${abbr}`}
        popoverTargetAction="toggle"
        rel="noopener noreferrer"
      >
        <img alt={`${name} icon`} className={styles.icon} src={icon} />

        <span
          className={styles.tootlip}
          id={`service-${abbr}`}
          popover="hint"
          ref={tooltip}
          role="tooltip"
        >
          {name}
          <span className={styles.arrow} />
        </span>
      </a>
    </li>
  );
};
