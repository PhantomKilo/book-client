import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "../SearchPage.css";

const Results = (props) => {
  const book = props.book;
  const setSelectedBook = props.setSelectedBook;
  const setWishlist = props.setWishlist;
  const wishlist = props.wishlist;

  const bookList = book.map((item) => {
    const addToWishlist = () => {
      setWishlist([...wishlist, item.volumeInfo]);
    };

    const handleSelect = () => {
      setSelectedBook(item.volumeInfo);
    };

    let img;

    if (item.volumeInfo.imageLinks === undefined) {
      img = "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
    } else {
      img = item.volumeInfo.imageLinks.thumbnail;
    }

    if (book === undefined) {
      return (
        <Card>
          <Card.Title>No Results</Card.Title>
        </Card>
      );
    } else {
      return (
        <Col sm={12} md={6} lg={4}>
          <Card onClick={handleSelect}>
            <Row>
              <Col>
                <Card.Img
                  src={img}
                //   variant="top"
                //   className="img-flui mx-auto"
                />
              </Col>
              <Col>
                <Card.Title>{item.volumeInfo.title}</Card.Title>
                <Card.Body className="mx-auto">
                  <Card.Text>{item.volumeInfo.authors}</Card.Text>
                  <Button onClick={addToWishlist}>Add to wishlist</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      );
    }
  });

  return <Row>{bookList}</Row>;
};

export default Results;
