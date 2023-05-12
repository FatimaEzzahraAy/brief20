import { useState } from "react";
import "../style/SoldeActuel.css";

function SoldeActuel({ OpRevenu, OpDepense }) {
  console.log(OpRevenu);

  var revenu = OpRevenu.reduce(function (acc, obj) {
    return parseInt(acc) + parseInt(obj.montant);
  }, 0);
  console.log(revenu);
  let depense = OpDepense.reduce(function (acc, obj) {
    return parseInt(acc) + parseInt(obj.montant);
  }, 0);
  let total = revenu - depense;

  return (
    <div className="enfant">
      {/* Soldes */}
      <div className="revenu">
        <h5>Revenu</h5>
        <span>{revenu} Dhs</span>
      </div>
      <div className="depense">
        <h5>Dépense</h5>
        <span>{depense} Dhs</span>
      </div>
      <div className="total">
        <h5>Total</h5>
        <span>{total} Dhs</span>
      </div>
    </div>
  );
}
export default SoldeActuel;
