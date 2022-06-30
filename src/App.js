import React from "react";
import Card from "./components/Card";
import data from "./data/data.json";

//merging components
const App = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {/* passing data to card component using props */}
          <Card data={data} />
        </div>
      </div>
    </section>
  );
};

export default App;
