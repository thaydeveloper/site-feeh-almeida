import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Gallery from "./components/galery/Gallery";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Gallery />
      </main>
    </>
  );
}

export default App;
