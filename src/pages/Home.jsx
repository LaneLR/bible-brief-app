import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p>This is a test page. </p>
        <button onClick={() => navigate("/About")}>About</button>
        <button onClick={() => navigate("/Newsletter")}>Newsletter</button>
      </main>
    </>
  );
}

