import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
/* import About from "./components/about/About"; */
import Gallery from "./components/galery/Gallery";
/* import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; */
import Prices from "./components/prices/Prices";
import Scheduling from "./components/scheduling/Scheduling";

function App() {
  /* const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
    rootMargin: "-100px 0px",
  }); */
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <About />
        </motion.div> */}
        <Gallery />
        <Prices />
        <Scheduling />
      </main>
    </>
  );
}

export default App;
