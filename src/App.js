import "./App.css";
import pokemons from "./pokemon.json";
function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800, //React will translate 800 with no unit into 800 pixel
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          {/* React needs tbody for table unlike normal html table*/}
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Let's say we only want the first twenty results, we do pokemons.slice(0, 20).map((pokemon) =>()) */}
          {pokemons.slice(0, 20).map((pokemon) => (
            <tr key={pokemon.id}>
              {/* The focus is that the key has to give unique result among its siblings,
                                    but doesn't have to be unique for the whole page out side this keys of range*/}
              {/* Having a key is really important for iterator to trevese through the list */}
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
