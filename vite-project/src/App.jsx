import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import UserContainer from "../../my-vite-app/src/assets/Chapter/Ch9/UserContainer";

function App() {
  return (
    <div>
      <Route exact path="/" component={UserContainer} />
      <Route path="/users/:id" component={UserContainer} />
    </div>
  );
}

export default App;
