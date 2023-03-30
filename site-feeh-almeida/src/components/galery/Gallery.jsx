import React, { useEffect, useRef, useState } from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bestImages from "../../services/bestImages";

const Gallery = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [isInView]);
  return (
    <section className="gallery section" id="gallery">
      <h1 className="title__gallery ">Galeria</h1>
      <div className="content__gallery container">
        <motion.div
          ref={ref}
          whileTap={{ cursor: "grabbing" }}
          className="carousel container"
        >
          <motion.div
            ref={carousel}
            animate={{ x: isInView ? [800, 0] : 0 }}
            transition={{ duration: 1 }}
            className="img-container"
            dragConstraints={{ right: 0, left: -width }}
            drag="x"
          >
            {bestImages.map((bestImage) => (
              <motion.div className="item" key={bestImage.id}>
                <img src={bestImage.image} alt="imagens-de-unhas-de-fibra" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
