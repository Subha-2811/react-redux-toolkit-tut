import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  updateAge,
  updateName,
  updateStatus,
  fetchName,
} from "../reducers/userReducer";

function Profile() {
  const { name, age, status } = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeAge = (age) => {
    dispatch(updateAge(age));
  };
  const changeName = (name) => {
    dispatch(fetchName());
  };
  const changeStatus = (status) => {
    dispatch(updateStatus(status));
  };
  return (
    <div>
      <h1>Profile</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{status}</h2>
      <button onClick={() => changeAge(22)}>Update Age</button>
      <button onClick={() => changeName("Subhajyoti Naskar")}>
        Update Name
      </button>
      <button onClick={() => changeStatus("Single")}>Update Status</button>
    </div>
  );
}

export default Profile;
