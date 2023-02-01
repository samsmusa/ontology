import { Defaults } from "./demos/MultiSelection.story";

export default function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ width: "400px" }}>
          <Defaults />
        </div>
        <div style={{ width: "500px" }}>
          <Defaults />
        </div>
      </div>
    </div>
  );
}
