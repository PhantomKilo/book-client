import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { useAuth } from "../../Contexts/AuthContext"

const Wishlist = (props) => {
    const {currentUser} = useAuth()
    const wishlist = props.wishlist

    const bookList = wishlist.map((book) => {
        return(
            <Col sm={12} md={4}>
                <Card>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {book.authors}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return(
        <Container>
            <Row>
                <h1>{currentUser.name}</h1>
            </Row>
            <Row>
                {bookList}
            </Row>
        </Container>
    )
}

export default Wishlist