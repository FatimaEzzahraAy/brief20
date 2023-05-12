import { useState } from "react";

function Categorie({ catNouv, setCatNouv, tableType, setTableType }) {
  function AjouterCat(e) {
    e.preventDefault();
    setTableType([...tableType, { AjCat: catNouv }]);
  }
  return (
    <div>
      {/* <h3>Ajouter une catégorie:</h3> */}
      <form>
        <div>
          <input
            type="text"
            placeholder="Catégorie"
            onChange={(e) => setCatNouv(e.target.value)}
          />
          <button onClick={AjouterCat}>Ajouter une catégorie</button>
        </div>
      </form>
    </div>
  );
}

export default Categorie;
