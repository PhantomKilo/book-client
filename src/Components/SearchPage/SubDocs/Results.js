import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const Results = (props) => {
  const book = props.book;

  //   console.log(book)

  const bookList = book.map((item) => {
    if (book === undefined) {
      return (
        <Card>
          <Card.Title>No Results</Card.Title>
        </Card>
      );
    } else {
      return (
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Title>{item.volumeInfo.title}</Card.Title>
            <Card.Body>
              <Card.Text>{item.volumeInfo.authors[0]}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }
  });

  return (
    <Row>{bookList}</Row>
  );
};

export default Results;
