import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DataBox.module.css";
import CircularProgress from "@mui/material/CircularProgress";

function DataBox() {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/constantData").then((response) => {
      setServices(response.data);
      console.log(response.data);
    });
  }, []);

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
