import "./App.css";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';


function App() {
  return (
    <div className="App">
      <MyApp/>
      <MyForm/>
    </div>
  );
}

function MyForm(){
  const [inputs, setInputs] = useState({
   username: "",
   password: "",
   confirmPassword: "",
   email: "",
   country:"",
   avatar:"",
  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };


  function handleSubmit(e) {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
    alert("Passwords do not match!");
    console.log(inputs.confirmPassword)
    console.log(inputs.password)
    return;
  }

  alert("Form submitted!");
};



  return(
    <form onSubmit={handleSubmit}>

      <h1>Welcome!</h1>
      <h4>Username:</h4>
      <label>
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          required pattern="^[A-Z][^\s]*$"
          title="Username must start with a capital letter and contain no spaces"
        />
      </label>

      <h4>Email:</h4>
      <label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
        </label>

        <h4>Country:</h4>
        <label>
          <input
            type="text"
            name="country"
            value={inputs.country}
            onChange={handleChange}
            required

          />
      </label>

      <h4>Password:</h4>
      <label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          required pattern="^(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$"
          title="Password must contain at least 8 characters, 1 capital letter, and 1 special character"
        />
      </label>

      <h4>Confirm Password:</h4>
      <label>
        <input
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChange={handleChange}
          required pattern="^(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$"
          title="Password must contain at least 8 characters, 1 capital letter, and 1 special character"
        />
      </label>
       <br/>
       <br/>

      <label > Term Of Agreement:
        <input style={{
          height: "20px",
          width: "20px",
          boxSizing: "none",
        }}

          type="checkbox"
        />
      </label>
      <label>
        <input type="submit"/>
      </label>

      <br /><br />
      <p>Username: {inputs.username}</p>
      <p>Email: {inputs.email}</p>
      <p>Country: {inputs.country}</p>
      <p>Password: {inputs.password}</p>
      <p>Confirm Password: {inputs.confirmPassword}</p>
    </form>
  )
}



function Modal({isOpen, onClose,children}){
  if (!isOpen) return null;

  return createPortal(<div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

  function MyApp(){
    const [isOpen, setIsOpen] = useState(false);
    return(
      <div>
      <h1>My App</h1>
        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </div>
  );
}





export default App;