import { useRef } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = (props) => {
  const setSearchAuthor = props.setSearchAuthor;
  const setSearchName = props.setSearchName;
  const handleClick = props.handleClick;
  const authorRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchName(nameRef.current.value);
    setSearchAuthor(authorRef.current.value);
    const call = await handleClick();
    return call;
  };

  return (
    <Card>
      <Card.Title>Search Google Book API</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" ref={nameRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" ref={authorRef} />
          </Form.Group>
          <Button type="submit">search</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
