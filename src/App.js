import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
function App() {
  return (
    <div className="App">
   <Container>
     
  <Row className="justify-content-md-center">
    <Col xs lg="2">
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
    </Col>
    <Col md="auto">
    <Form>
    <InputGroup hasValidation>
  <InputGroup.Text>@</InputGroup.Text>
  <Form.Control type="text" required isInvalid />
  <Form.Control.Feedback type="invalid">
    Please choose a username.
  </Form.Control.Feedback>
</InputGroup>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button as="input" type="submit" value="Submit" />{' '}
</Form>
    </Col>
    <Col xs lg="2">
    <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>Importer Votre CV</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
    </Col>
  </Row>
  
</Container>
    </div>
  );
}

export default App;
