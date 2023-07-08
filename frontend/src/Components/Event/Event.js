import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event() {
    return (
        <Card >
            <Card.Img style={{ height: 250 }} variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80/100px180" />
            <Card.Header>Uvic Programming Club</Card.Header>
            <Card.Body>
                <Card.Title>Competitive Programming Contest</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">More info</Button>
            </Card.Body>
            <Card.Footer className="text-muted text-center">2 days ago</Card.Footer>
        </Card>
    );
}

export default Event;