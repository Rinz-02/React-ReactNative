import React from 'react';
import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";

export default function DecouplingFunction() {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/one/1" />} />
      <Route exact path="/one/1" component={First} />
      <Route exact path="/one/2" component={Second} />
    </div>
  )
}

export  function First() { 
    return <p>Feature 1, page 1</p>;
}
export  function Second() { 
    return <p>Feature 2, page 2</p>;
}


