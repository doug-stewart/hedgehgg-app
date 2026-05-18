import { toLocaleTitleCase } from "../../helpers/strings";
import { useServices } from "../../hooks/useServices";
import { Service } from "../service/Service";

import styles from "./Services.module.css";

export const Services = () => {
  const { services } = useServices();
  const keys = Object.keys(services || {});
  return keys.map((key) => (
    <div key={key}>
      <h2>{toLocaleTitleCase(key)}</h2>
      <ul className={styles.list}>
        {services?.[key]?.map((service) => (
          <Service key={service.href} service={service} />
        ))}
      </ul>
    </div>
  ));
};
