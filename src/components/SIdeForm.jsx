import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function SideForm(){
  let navigate =useNavigate();
  const [value,setValue] = useState({
    
  })
    return (
      <>
        <div
          style={{
            marginTop: "30px",
            marginLeft: "-10px",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="marks">
              <Form.Label>Percentage Marks</Form.Label>
              <Form.Control type="text" placeholder="Enter % Marks" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="course">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Name" />
            </Form.Group>
          </Form>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "-10px",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="key">
              <Form.Label>Secret Key</Form.Label>
              <Form.Control type="text" placeholder="Enter Secret Key" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issuer">
              <Form.Label>Issuer's Public Key</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="receiver">
              <Form.Label>Receiver</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Issue Credential
            </Button>
            <Button className='ms-4'  variant="danger" type="submit">
              PDF
            </Button>
          </Form>
        </div>
        <br/>
      </>
    );
}