import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Body";
import { ScreenOrientation } from "@awesome-cordova-plugins/screen-orientation";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  document.addEventListener("deviceready", () => {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  });

  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
