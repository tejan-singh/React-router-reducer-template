import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to="/">Go home</Link>
    </>
  );
};

export default ErrorPage;
