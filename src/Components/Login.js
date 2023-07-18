import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const Login = () => {
  const { setUserId, setUsername, setAuthToken, setCredentials } =
    useContext(AppContext);
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const tokenResponse = await axios.post(
        "https://bookstore.toolsqa.com/Account/v1/GenerateToken",
        formData
      );

      const { token } = tokenResponse.data;
      setAuthToken(token);
      setUsername(formData.userName);
      setCredentials(formData);

      // Now retrieve the user details using the generated token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const userResponse = await axios.post(
        "https://bookstore.toolsqa.com/Account/v1/User",
        formData,
        // config
      );

      const { UserId } = userResponse.data;
      setUserId(UserId);

      alert("Login successful!");
      window.location.href = "/RetrieveUser";
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
