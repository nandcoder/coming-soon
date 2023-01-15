import './App.css';
import Navbar from './components/Navbar';
import { Button, Container, Form } from 'react-bootstrap';

function App() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log("Email:", e.target.email.value);
    // sendEmailToBackend
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <div className="content">
          COMING SOON
        </div>
        <div className="info">Our developers are working on the website</div>
        <div className="info">Get notified when the app is launched</div>
        <Form onSubmit={handleSubmit} className="formWrapper" >
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Notify Me
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
