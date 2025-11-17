import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from "./components/UsersList";
import SearchBar from "./components/SearchBar";
import {usersData}  from "./data/users";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container py-5">
      <h2 className="mb-4">Users</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <UsersList users={usersData} search={search} />
    </div>
  );
}


export default App
