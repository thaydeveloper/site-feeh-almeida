import React, { useEffect, useRef, useState } from "react";
import "./gallery.css";
import { motion, useInView, useAnimate } from "framer-motion";
/* import { useInView } from "react-intersection-observer"; */
import bestImages from "../../services/bestImages";

const Gallery = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  const [scope, animate] = useAnimate();
  const isInView = useInView(carousel);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    if (isInView) {
      animate(scope.current, { x: [300, 0] }, { duration: 2 });
      return;
    }
  }, [isInView]);
  return (
    <section className="gallery section" id="gallery">
      <h1 className="title__gallery ">Galeria</h1>
      <div className="content__gallery container">
        <motion.div
          ref={carousel}
          style={{ overflow: "scroll" }}
          whileTap={{ cursor: "grabbing" }}
          className="carousel container"
        >
          <motion.div
            ref={scope}
            className="img-container"
            dragConstraints={{ right: 0, left: -width }}
            drag="x"
          >
            {bestImages.map((bestImage) => (
              <motion.div className="item" key={bestImage.image}>
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
