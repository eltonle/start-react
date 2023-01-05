import { useState, useEffect } from "react"; //le useState permet de creer les getters et setters
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import "./css/app.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);
  //technos sera de la maniere suivante
  //[{name:'react', category:'front', description:'learn react'},{name:'Node', category:'back', description:'learn node'}]
  useEffect(() => {
    console.log("useEffect with []");
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    console.log("useEffect with [technos]");
    setStoredTechnos(technos);
  }, [technos]);

  // function  qui va gere la sumission du formulaire
  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />} //une props est quelque chose qui a ete fournie par le parent(passer du parent a l'enfant)
        />
        <Route
          path="/list"
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
