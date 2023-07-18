import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const CreateUser = () => {
  const { setUserId, setUsername } = useContext(AppContext);
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bookstore.toolsqa.com/Account/v1/User",
        formData
      );
      const { UserId, UserName } = response.data;
      setUserId(UserId);
      setUsername(UserName);
      alert("Successfully created user");
      window.location.href = "/login";
    } catch (error) {
      alert("Submission Failed");
      window.location.reload();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
