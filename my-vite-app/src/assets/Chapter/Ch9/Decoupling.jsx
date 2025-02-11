import React, { useState } from "react";
import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";

 export function One(){
    return<>
    <p>One</p>
    </>
 }

  export function Two(){
    return<>
    <p>Two</p>
    </>
 }

 export default function Decoupling(){
  const [Loggin,setLoggin] = useState(true);

  return<>
  <One />
  <Two />
  {Loggin ? <Route exact path="/" render={() => <Redirect to="welcome" />} /> : <Route exact path="/" render={() => <Redirect to="Loggin" />} />}
  </>
 }