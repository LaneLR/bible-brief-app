import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Header from "./Header";
import { ScreenOrientation } from "@awesome-cordova-plugins/screen-orientation";

function App() {
  document.addEventListener("deviceready", () => {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  });

  return (
    <>
      <Header />
      <main>
        <section className="navbar"></section>
        <section className="card-wrapper">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </section>
      </main>
      <footer>
        <p>TheBibleBrief.org</p>
        <p>Copyright © 2025 The Bible Brief - All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
