import { useState } from "react";
import "../style/App.css";
import Historique from "./Historique";
import Operation from "./Operation";
import SoldeActuel from "./SoldeActuel";

function App() {
  const [tableOp, setTableOp] = useState([]);
  const [OpRevenu, setOpRevenu] = useState([]);
  const [OpDepense, setOpDepense] = useState([]);
  return (
    <main>
      <div className="Parent">
        <div className="enfant">
          <SoldeActuel OpRevenu={OpRevenu} OpDepense={OpDepense} />
        </div>
        <div className="enfant2">
          <Operation
            tableOp={tableOp}
            setTableOp={setTableOp}
            OpRevenu={OpRevenu}
            setOpRevenu={setOpRevenu}
            OpDepense={OpDepense}
            setOpDepense={setOpDepense}
          />
        </div>
      </div>
      <div>
        <Historique tableOp={tableOp} />
      </div>
    </main>
  );
}

export default App;
