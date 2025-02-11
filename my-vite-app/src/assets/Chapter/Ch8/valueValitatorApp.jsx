import React from "react";
import { MyComponentValid } from "./valueValitator";

const myHeader = <h1>My Header</h1>;
const myContent = <p>My Content</p>;

export function TestApp() {
  return (
    <>
      <MyComponentValid {...{ myHeader, myContent }} />
      <MyComponentValid myHeader="My Header" {...{ myContent }} />
      <MyComponentValid {...{ myHeader }} myContent="My Content" />
      <MyComponentValid
        {...{ myHeader }}
        myContent={[myContent, myContent, myContent]}
      />
    </>
  );
}
