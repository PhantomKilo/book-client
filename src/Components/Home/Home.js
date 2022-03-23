import { Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "./SubCards/Home";
import Login from "./SubCards/Login";
import SignUp from "./SubCards/SignUp";

const HomePage = () => {
    return(
        <Container>
            <Routes>
                <Route exact path="/*" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </Container>
    )
}

export default HomePage