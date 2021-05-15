import "./App.css";

const arr = ["Juan", "Jess", "Jaime", "Jax", "Tiff", "Coco"];
//const newArr = ["<li>Juan</li>", "<li>Jess</li>", "<li>Jaime</li>", "<li>Jax</li>", "<li>Tiff</li>", "<li>Coco</li>"];

function App() {
  const displayNames = () => {
    const newArr = arr.map((eachName) => {
      return (
        <li key={eachName}>
          <img src="" />
          <h5>Number of likes</h5>
          <h1>Name: {eachName}</h1>
          <ul>Comments</ul>
        </li>
      );
    });
    return newArr;
  };

  return (
    <div>
      <h1>How can we display an array of names in react?</h1>
      <ul>
        {displayNames()}
        {/* <li>
          <h1>{arr[0]}</h1>
        </li>
        <li>
          <h1>{arr[1]}</h1>
        </li>
        <li>
          <h1>{arr[2]}</h1>
        </li>
        <li>
          <h1>{arr[3]}</h1>
        </li>
        <li>
          <h1>{arr[4]}</h1>
        </li>
        <li>
          <h1>{arr[5]}</h1>
        </li> */}
      </ul>
      <h2>How can we display the array only if the user is logged in?</h2>
    </div>
  );
}

export default App;
