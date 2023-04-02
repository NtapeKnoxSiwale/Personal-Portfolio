import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../components/wrapper";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => setServices(data));
  }, []);

  return (
    <>
      <h2 className="head-text">Services</h2>
      <h3 className="subhead-text">I turn ideas into real life products.</h3>

      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={service.title + index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {service.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__whitebg"
);
