import React from "react";
import MyUser from "./ComponentInstance";
import PropTypes from "prop-types";

UserComponent.propTypes = {
  myDate: PropTypes.instanceOf(Date),
  myCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  MyUser: PropTypes.instanceOf(MyUser)};
export default function UserComponent(myDate, myCount, myUser) {
  return (
    <div>
      <p>{myDate.toLocaleString()}</p>

      <p>{myCount}</p>
      <ul>
        <li>{myUser}</li>
      </ul>
    </div>
  );
}
