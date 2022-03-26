import { Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "./SubDocs/Home";
import Login from "./SubDocs/Login";
import SignUp from "./SubDocs/SignUp";
import ForgotPassword from "./SubDocs/ForgotPassword";

const HomePage = () => {
  return (
    <Container>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        <Route
          exact
          path="/signup"
          element={<SignUp />}
        />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Container>
  );
};

export default HomePage;
