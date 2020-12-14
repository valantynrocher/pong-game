import React from "react";
import Playground from "./components/Playground";
import Provider from "./context/Provider";

const App = () => {
  return (
    <Provider>
      <Playground />
    </Provider>
  );
};

export default App;
