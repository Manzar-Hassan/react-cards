import React from "react";
import Card from "./components/Card";
import data from './data/data.json'

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card data={data} />
        </div>
      </div>
    </section>
  );
}

export default App;
