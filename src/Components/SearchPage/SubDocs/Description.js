import Card from "react-bootstrap/Card"

const Description = (props) => {
    const selectedBook = props.selectedBook
    let title
    let authors
    let description
    let thumbnail

    if (selectedBook === undefined) {
        title = ''
        authors = ''
        description = ''
        thumbnail = ''
    } else {
        title = selectedBook.title
        authors = selectedBook.authors
        description = selectedBook.description
        thumbnail = selectedBook.thumbnail
    }

    return(
        <Card>
            <Card.Title>Description</Card.Title>
            <Card.Body>
                <Card.Text>{title}</Card.Text>
                <Card.Text>{authors}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Description