import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";

import Container from "react-bootstrap/Container";

import "./App.css";
import NavBar from "./Nav";
import HomePage from "../Home/Home";
import Profile from "../Profile/Profile";
import SearchPage from "../SearchPage/SearchPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Wishlist from "../Wishlist/Wishlist";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [profile, setProfile] = useState({})

  return (
    <Container className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route exact path="/*" element={<HomePage />} />
          <Route
            exact
            path="/profile/*"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/search-page"
            element={
              <PrivateRoute>
                <SearchPage wishlist={wishlist} setWishlist={setWishlist} />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/my-list"
            element={
              <PrivateRoute>
                <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
