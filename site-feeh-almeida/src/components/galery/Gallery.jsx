import React, { useEffect, useRef, useState } from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import bestImages from "../../services/bestImages";

const Gallery = () => {
  const carousel = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <section className="section__gallery container grid" id="gallery">
      <div className="container__gallery grid">
        <div className="content__gallery">
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className="carousel container"
          >
            <h1 className="title__gallery">Galeria</h1>
            <motion.div
              className="img-container"
              dragConstraints={{ right: 0, left: -width }}
              drag="x"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              {bestImages.map((bestImage) => (
                <motion.div className="item" key={bestImage.image}>
                  <img src={bestImage.image} alt="imagens-de-unhas-de-fibra" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="content__results">
          <h1 className="title__gallery">Antes x Depois</h1>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
