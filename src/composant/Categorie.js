import "../style/Categorie.css"

function Categorie() {
    // const [catNouv, setCatNouv] = useState("");
    
    return <form>
        <h3>Ajouter une catégorie:</h3>
        <hr/>
        <div>
          <input
            type="text"
            placeholder="Catégorie"
            // onChange={(e) => setCatNouv(e.target.value)}
          />
          <button >Ajouter une catégorie</button>
        </div>
    </form>
}

export default Categorie;