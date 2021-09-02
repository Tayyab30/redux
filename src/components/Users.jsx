import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddUser from "./AddUser";
import User from "./User";
import * as UserActions from "../store/actions/user";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    username: "",
  });

  const addUser = () => {
    dispatch(UserActions.addNewUser({ ...user, id: Math.random() }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const deleteUser = (id) => {
    dispatch(UserActions.deleteUser(id));
  };

  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          username={user.username}
          email={user.email}
          deleteUser={(id) => deleteUser(id)}
        />
      ))}
      <AddUser addUser={addUser} handleChange={handleChange} />
    </div>
  );
};

export default Users;
