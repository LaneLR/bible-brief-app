import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p>This is a test page.</p>
        <button onClick={() => navigate("/home")}>Click me to go back</button>
      </main>
    </>
  );
}
