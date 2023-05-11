import "../style/Historique.css";

function Historique({ tableOp }) {
  return (
    <div>
      {/* Afficher le tableau */}
      <table>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Type</th>
          <th>Description</th>
          <th>Catégorie</th>
          <th>Date</th>
        </tr>
        {tableOp.map((Opt) => (
          <tr
            style={
              Opt.Type == "Revenu"
                ? { backgroundColor: "#5d9c59" }
                : { backgroundColor: "#DF2E38" }
            }
          >
            <td>{Opt.Nom}</td>
            <td>{Opt.Montant}</td>
            <td>{Opt.Type}</td>
            <td>{Opt.Desc}</td>
            <td>{Opt.Cat}</td>
            <td>{Opt.DateT}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Historique;
