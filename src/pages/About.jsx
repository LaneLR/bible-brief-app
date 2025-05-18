import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p>This is a test page.</p>
        <button onClick={() => navigate("/home")}>Click to go to Home.</button>
      </main>
    </>
  );
}

