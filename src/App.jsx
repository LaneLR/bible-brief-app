import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="left-nav">
          <p>|||</p>
        </div>
        <div className="center-nav">
          <img
            alt="The Bible Brief Logo"
            src="/bible-brief-app/biblebrief-logo.jpg"
          />
        </div>
        <div className="right-nav">
            <img
              alt="The Bible Brief Logo"
              src="/bible-brief-app/user-icon.png"
            />
        </div>
      </header>
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
