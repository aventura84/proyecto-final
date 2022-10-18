import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSetUser, useUser } from "../UserContext";
import "./SignIn.css";

function SignIn() {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <main id="home"></main>;
}

export default SignIn;
