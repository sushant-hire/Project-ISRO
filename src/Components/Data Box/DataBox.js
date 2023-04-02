import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DataBox.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { constantData } from "../../Constant/ConstantData";

function DataBox() {
  const { id } = useParams();
  const [services, setServices] = useState(constantData);
  console.log(setServices)

  const service = services.find((s) => s.id === parseInt(id));

  return (
    <div className={styles.MainContainer}>
      {service ? (
        <div className={styles.ServiceDeetsContainer}>
          <h2>{service.name}</h2>
          <p>{service.data}</p>
        </div>
      ) : (
        <div className={styles.Loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default DataBox;
