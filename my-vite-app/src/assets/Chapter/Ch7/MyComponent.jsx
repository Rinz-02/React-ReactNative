import React from "react";
import PropTypes from "prop-types";


export default function MyComponent({props}) {
    
    const {myString,myNumber,myBool,myFunc,myArray,myObject} = props

  return (
    <section>
      <p>{myString}</p>
      <p>{myNumber}</p>
      <p>
        <input type="checkbox" defaultChecked={myBool} />
      </p>
      <p>{myFunc()}</p>
      <ul>
        {myArray.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p>{myObject.myProp}</p>
    </section>
  );
}
MyComponent.propTypes = {
  myString: PropTypes.string,
  myNumber: PropTypes.number,
  myBool: PropTypes.bool,
  myFunc: PropTypes.func,
  myArray: PropTypes.array,
  myObject: PropTypes.object,
};
