import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import Account from "./pages/Account"
import Add from "./pages/Add"
import Favorites from "./pages/Favorites"
import Messages from "./pages/Messages"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="Cont" element={<Account />} />
      <Route path="Favorite" element={<Favorites />} />
      <Route path="Adaugare" element={<Add />} />
      <Route path="Mesaje" element={<Messages />} />
    </Routes>
  )
}