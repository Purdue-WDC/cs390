import {useState} from "react";

console.log("Things to consider:");
console.log("1. Form shouldn't reload the page!");
console.log("2. You should show a loading indicator");
console.log("3. Once you get the data you need to show the results instead");

function App() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");

  async function fetchUserDetails() {
    // maybe a state here?
    // send a POST request
    // with JSON data
    // name and college as
    // {"name":name, "college":college}
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    const resp = await fetch("http://localhost:3000/user", {
      // ??
    });
    const json = await resp.json();
    console.log(json);
  }

  function handleSubmit() {
    console.warn("TODO!");
  }

  return (
    <div>
      <div>Enter Your Details</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </label>
        </div>
        <div>
          <label>
            College:
            <input
              value={college}
              onChange={(e) => setCollege(e.currentTarget.value)}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
