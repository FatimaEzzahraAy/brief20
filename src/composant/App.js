import { useState } from "react";
import "../style/App.css";
import Historique from "./Historique";
import Operation from "./Operation";
import SoldeActuel from "./SoldeActuel";
import Navbar from "./Navbar";
import Categorie from "./Categorie";

function App() {
  const [tableOp, setTableOp] = useState([]);
  const [OpRevenu, setOpRevenu] = useState([]);
  const [OpDepense, setOpDepense] = useState([]);
  const [OpAjouter, setOpAjouter] = useState("no");
  const [CatAjouter, setCatAjouter] = useState("no");
  const [catNouv, setCatNouv] = useState("");
  const [tableType, setTableType] = useState([]);

  return (
    <div>
      <header>
        <Navbar setOpAjouter={setOpAjouter} setCatAjouter={setCatAjouter} />
      </header>
      <main>
        <div className="Parent">
          <div className="enfant">
            <SoldeActuel OpRevenu={OpRevenu} OpDepense={OpDepense} />
          </div>
          <div className="enfant2">
            {OpAjouter === "true" && (
              <Operation
                tableOp={tableOp}
                setTableOp={setTableOp}
                OpRevenu={OpRevenu}
                setOpRevenu={setOpRevenu}
                OpDepense={OpDepense}
                setOpDepense={setOpDepense}
                tableType={tableType}
              />
            )}
          </div>
          <div>
            {CatAjouter === "true" && (
              <Categorie
                catNouv={catNouv}
                setCatNouv={setCatNouv}
                tableType={tableType}
                setTableType={setTableType}
              />
            )}
          </div>
        </div>
        <div>
          <Historique tableOp={tableOp} />
        </div>
      </main>
    </div>
  );
}

export default App;
