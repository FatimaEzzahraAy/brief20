import { useState } from "react"; // doit être la 1er ou le style ne s'applique pas
import "../style/Operation.css";

function Operation({
  tableOp,
  setTableOp,
  OpRevenu,
  setOpRevenu,
  OpDepense,
  setOpDepense,
}) {
  const [nom, setnom] = useState("");
  const [montant, setmotant] = useState(0);
  const [type, settype] = useState("");
  const [desc, setdesc] = useState("");
  const [cat, setcat] = useState("");
  const [dateT, setdateT] = useState("");

  // if (type === "Revenu") {
  //   setOpRevenu([...OpRevenu, { Montant: montant }]);
  // }

  //  else if (type == "Dépense");
  // {
  //   setOpDepense([...OpDepense, { montant: montant }]);
  // }

  function Valider(e) {
    e.preventDefault();
    setTableOp([
      ...tableOp,
      {
        Nom: nom,
        Montant: montant,
        Type: type,
        Desc: desc,
        Cat: cat,
        DateT: dateT,
      },
    ]);
  }

  return (
    <main>
      <div className="enfant2">
        {/* Formulaire */}
        <div className="titre">
          <h3>Ajouter une transaction</h3>
        </div>
        <form>
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => setnom(e.target.value)}
          />
          <input
            type="number"
            placeholder="Montant"
            onChange={(e) => setmotant(e.target.value)}
          />
          <select onChange={(e) => settype(e.target.value)}>
            <option>Type</option>
            <option>Dépense</option>
            <option>Revenu</option>
          </select>
          <textarea
            placeholder="Description"
            onChange={(e) => setdesc(e.target.value)}
          ></textarea>
          <select onChange={(e) => setcat(e.target.value)}>
            <option>Catégorie</option>
            <option>Alimentation</option>
            <option>Logement</option>
            <option>Transport</option>
            <option>Loisirs</option>
          </select>
          {/* <button onClick={(e) => AjouterCat(e)}>Ajouter une catégorie</button> */}
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => setdateT(e.target.value)}
          />
          <button onClick={Valider}>Sauvegarder</button>
        </form>
      </div>
    </main>
  );
}

export default Operation;