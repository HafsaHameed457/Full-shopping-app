import React from "react";

import { useState, useContext } from "react";

import Button from "../button/button";
import {
  signInWithGoogle,
  createUserDocFromAuth,
  signInWithEmailAndPasswordAuth,
} from "../../utlis/firebase.utlis";

import FormInput from "../form-input/form-input";
import "./signin.styles.scss";
const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [values, setValues] = useState(defaultValues);
  const { email, password } = values;

  console.log(values);
  const resetFormFields = () => {
    setValues(defaultValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const { user } = await signInWithEmailAndPasswordAuth(email, password);

      resetFormFields();
    } catch (error) {}
  };

  const handlleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const signIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account?</h2>
      <span>SignIn here</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handlleChange}
          required
          name="email"
          value={email}
        />
        {console.log(email)}
        <FormInput
          label="Password"
          type="password"
          onChange={handlleChange}
          required
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" onSubmit={handleSubmit}>
            Sign In
          </Button>
          <Button buttonType="google" onClick={signIn}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
