import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

import DataList from "./data/IdCard.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        {DataList.map((id, index) => {
          return (
            <IdCard id={id} key={index} />
          )
        })}
      </div>
      <div>
        <Greetings lang="es">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
