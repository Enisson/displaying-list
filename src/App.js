import {useState} from 'react';
import './App.css';


function App() {

  
  const [userName, setuserName] = useState ("");
  const [password, setpassword] = useState("");

  const [name, setname] = useState("");
  const [list, setlist] = useState([]);
  const [showState, setshowState] = useState(false)
  
  const user = "Eni123";
  const pass = "123";


  function login() {
    if (userName === user && password === pass){
      setshowState(true);
    } else {
      alert('Login ou senha inválidos')
    }
  }

  return (
    <div className="App">
      <div className="Login">
        <h1>Login</h1>
        <input type="text" placeholder="Type your username" onChange={(event) => {
          setuserName(event.target.value);
        }}/>
        <input type="password" placeholder="Type your password" onChange={(event) => {
          setpassword(event.target.value);
        }}/>
        <button onClick={login}>Login</button>
      </div>

      <div className="List">
        {showState ? <div>
          <h2>Name list</h2>
          <input type="text" onChange={(event) => {
            setname(event.target.value)
          }}/>
          <button onClick={() => {
            setlist( [...list, name] );
            setname("");
        
          }}>Add</button>
          {list.map((item, key) => {
            return <p key={key}>{item}</p>
          })}
          </div> : null };
        
      </div>

    </div>
  );
}

export default App;
