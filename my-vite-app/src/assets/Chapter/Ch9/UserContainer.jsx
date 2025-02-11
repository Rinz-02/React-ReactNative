import React from "react";
import PropTypes from "prop-types";
import { fetchUser } from "./exercise/User";

function UserContainer({
  match: {
    params: { id },
  },
 }) {
  const [error, setError] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    fetchUser(+id).then(
      (user) => {
        setError(null);
        setFirst(user.first);
        setLast(user.last);
        setAge(user.age);
      },
      (error) => {
        setError(error);
        setFirst(null);
        setLast(null);
        setAge(null);
      }
    );
  }, [id]);

  return (<User {...{ error, first, last, age }} />)

    UserContainer={}.propTypes = {
 match: PropTypes.object.isRequired
};

}

export default UserContainer;
