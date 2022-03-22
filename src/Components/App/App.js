import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";

import Container from "react-bootstrap/Container";

import './App.css';
import NavBar from "./Nav";

function App() {



  return (
    <Container className="App">
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </Container>
  );
}

export default App;
