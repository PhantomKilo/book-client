import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Description from "./SubDocs/Description";
import Results from "./SubDocs/Results";
import SearchBar from "./SubDocs/SearchBar";

const SearchPage = () => {
  const [book, setBook] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  // const [wishlist, setWishlist] = useState([])
  // const [selectedBook, setSelectedBook] = useState('')
  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchAuthor}`;

  const makeApiCall = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const results = await setBook(data);
    return results;
  };

  const handleClick = async () => {
    const call = await makeApiCall(searchUrl);
    return call;
  };

  return (
    <Container>
      <Row>
        <SearchBar
          setSearchName={setSearchName}
          setSearchAuthor={setSearchAuthor}
          handleClick={handleClick}
        />
      </Row>
    </Container>
  );
};

export default SearchPage;
