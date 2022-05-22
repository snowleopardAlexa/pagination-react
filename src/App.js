import './App.css';
import { useState } from 'react';
import data from "./mock-data.json";

function App() {
  const [users, setUsers] = useState(data.slice(0, 30));

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div className="user">
           <h3>{user.firstName}</h3>
           <h3>{user.lastName}</h3>
           <h3>{user.email}</h3>
          </div>  
        );
      })}
    </div>
  );
}

export default App;
