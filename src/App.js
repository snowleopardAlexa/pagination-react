import './App.css';
import { useState } from 'react';
import data from "./mock-data.json";
import ReactPaginate from 'react-paginate';

function App() {
  const [users, setUsers] = useState(data.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage 
  
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(user => {
    return (
      <div className="user">
       <h3>{user.firstName}</h3>
       <h3>{user.lastName}</h3>
       <h3>{user.email}</h3>
      </div>  
    );
  });

  return (
    <div className="App">
      {displayUsers}
    </div>
  );
}

export default App;
