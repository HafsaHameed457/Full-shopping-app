import React from "react";
import "./signup.styles.scss";
import { useState, useContext } from "react";
import Button from "../button/button";
import {
  createAuthUserwithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utlis/firebase.utlis";

import FormInput from "../form-input/form-input";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [values, setValues] = useState(defaultValues);
  const { displayName, email, password, confirmPassword } = values;
  const resetFormFields = () => {
    setValues(defaultValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserwithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handlleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Signup here</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          onChange={handlleChange}
          required
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handlleChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handlleChange}
          required
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handlleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
