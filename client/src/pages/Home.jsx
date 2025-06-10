import styled from "styled-components";
import Card from "../components/Card";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NewForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  height: 200px;
  width: auto;
`;

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "user",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://10.0.0.215:3535/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        alert("User added to the database");
        setFormData({
          username: "",
          password: "",
          role: "user",
          email: "",
        });
      }
    } catch (err) {
      console.error("Error is: ", err);
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <NewForm>
          <input
            name="username"
            type="text"
            value={formData.username}
            placeholder="username"
            style={{ fontSize: "1.5rem" }}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            placeholder="password"
            style={{ fontSize: "1.5rem" }}
            onChange={handleChange}
          />
          <input
          type=""
            name="email"
            value={formData.email}
            placeholder="email"
            style={{ fontSize: "1.5rem" }}
            onChange={handleChange}
          />
        </NewForm>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
}
