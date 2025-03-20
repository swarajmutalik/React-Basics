import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setname] = useState("Swaraj")
  const [form, setform] = useState({email:"", phone:""})

  const handleClick = () => {
    alert("Hey I am clicked");
  };

  const handleMouseOver = () => {
    alert("Hey I am a mouse over");
  };

  const handleChange = (e) => {
    // setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red
      </div> */}

      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
    </>
  );
}

export default App;
