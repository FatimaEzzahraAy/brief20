import "../style/Navbar.css";

function Navbar({ setOpAjouter, setCatAjouter }) {
  const dateAuj = new Date();

  return (
    <nav className="menu">
      <div className="buttonAj">
        <button onClick={() => setOpAjouter("true")}>
        + une transaction
        </button>
        <button onClick={() => setCatAjouter("true")}>
        + une catégorie
        </button>
      </div>
      <span>
        {dateAuj.getDate() +
          "/" +
          (dateAuj.getMonth() + 1) +
          "/" +
          dateAuj.getFullYear()}
      </span>
    </nav>
  );
}
export default Navbar;
