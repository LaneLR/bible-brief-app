import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import PrayerWall from "./pages/PrayerWall";
import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Body from "./components/Body";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;

`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Body>
        <Routes>
          <Route path="/bible-brief-app" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/prayerwall" element={<PrayerWall />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Body>
      <Navbar />
    </AppWrapper>
  );
}

export default App;
