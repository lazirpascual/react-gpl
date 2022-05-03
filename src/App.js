import { Route, Routes } from "react-router";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
