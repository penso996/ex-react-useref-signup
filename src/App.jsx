import { useState } from "react";

function App() {

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() || experience <= 0 ||
      !description.trim()
    ) {
      alert("Errore. Compilare tutti i campi correttamente");
      return;
    }
    console.log("Submit effettuato", {
      fullName,
      username,
      password,
      specialization,
      experience,
      description
    });
  }

  // RENDER
  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* fullName */}
        <label>
          <p>Nome Completo</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        {/* username */}
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {/* password */}
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* specialization */}
        <label>
          <p>Specializzazione</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}>
            <option value="Full Stack">Full Stack</option>
            <option value="Front End">Front End</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        {/* experience */}
        <label>
          <p>Esperienza</p>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
        {/* description */}
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Registrati</button>
      </form>
    </section>
  )
}

export default App