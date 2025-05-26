import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p>This is the About page.</p>
        <button onClick={() => navigate("/")}>Click to go to Home.</button>
      </main>
    </>
  );
}

