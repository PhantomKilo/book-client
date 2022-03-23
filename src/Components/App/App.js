import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";

import Container from "react-bootstrap/Container";

import './App.css';
import NavBar from "./Nav";
import HomePage from "../Home/Home";

function App() {



  return (
    <Container className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route exact path="/*" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
