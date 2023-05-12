// import { useState } from "react";

function Categorie({
  catNouv,
  setCatNouv,
  tableType,
  setTableType,
  setCatAjouter,
}) {
  let erreurCat = "";
  function AjouterCat(e) {
    e.preventDefault();

    if (catNouv === "") {
      erreurCat = "Veuillez remplir la catégorie";
    } else {
      setTableType([...tableType, { AjCat: catNouv }]);
    }
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
          <span>{erreurCat}</span>
          <div className="BtnValidation">
            <button onClick={AjouterCat}>Ajouter</button>
            <button onClick={() => setCatAjouter("no")}>Fermer</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Categorie;
