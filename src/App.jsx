import { useMemo, useState, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef();

  const isUsernameValid = useMemo(() => {
    const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return charsValid && username.trim().length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000;
  }, [description])

  const handleSubmit = e => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() || specialization === "Seleziona" ||
      !experience.trim() || experience <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
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
            ref={fullNameRef}
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
          {username.trim() && (
            <p style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid ? "Username valido." : "Almeno 6 caratteri. Non simboli."}
            </p>
          )}
        </label>
        {/* password */}
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid ? "Password valida." : "Almeno 8 caratteri di cui 1 lettera, 1 numero, 1 simbolo."}
            </p>
          )}
        </label>
        {/* specialization */}
        <label>
          <p>Specializzazione</p>
          <select
            ref={specializationRef}
          >
            <option value="Seleziona"></option>
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
            ref={experienceRef}
          />
        </label>
        {/* description */}
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {description.trim() && (
            <p style={{ color: isDescriptionValid ? "green" : "red" }}>
              {isDescriptionValid ? "Descrizione valida." : "Almeno 100 caratteri. Massimo 1000."}
            </p>
          )}
        </label>
        <button type="submit">Registrati</button>
      </form>
    </section>
  )
}

export default App