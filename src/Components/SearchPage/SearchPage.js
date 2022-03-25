import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Description from "./SubDocs/Description";
import Results from "./SubDocs/Results";
import SearchBar from "./SubDocs/SearchBar";

const SearchPage = () => {
  const [book, setBook] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  // const [wishlist, setWishlist] = useState([])
  const [selectedBook, setSelectedBook] = useState("");
  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchAuthor}`;

  const makeApiCall = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return setBook(data.items);
  };

  const handleClick = () => {
    makeApiCall(searchUrl);
  };

  useEffect(() => {
    makeApiCall(searchUrl);
  }, []);

  console.log(selectedBook)

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <SearchBar
            setSearchName={setSearchName}
            setSearchAuthor={setSearchAuthor}
            handleClick={handleClick}
          />
        </Col>
        <Col sm={12} md={6}>
          <Description />
        </Col>
      </Row>
      <Row>
        <Results book={book} setSelectedBook={setSelectedBook} />
      </Row>
    </Container>
  );
};

export default SearchPage;
