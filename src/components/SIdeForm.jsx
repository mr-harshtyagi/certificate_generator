import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormContext from "../FormContext";
import { useContext } from "react";

export default function SideForm(){
  const { name,course,professor,setName,setCourse,setProfessor } = useContext(FormContext); 
  
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
            <Form.Group
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="mb-3"
              controlId="name"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group
              onChange={(e) => {
                setCourse(e.target.value);
              }}
              value={course}
              className="mb-3"
              controlId="course"
            >
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Course Name" />
            </Form.Group>
            <Form.Group
              onChange={(e) => {
                setProfessor(e.target.value);
              }}
              value={professor}
              className="mb-3"
              controlId="marks"
            >
              <Form.Label>Instructor's Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Instructor's name" />
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="key">
              <Form.Label>Secret Key</Form.Label>
              <Form.Control type="text" placeholder="Enter Secret Key" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issuer">
              <Form.Label value="vhdici">Issuer's Public Key</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="receiver">
              <Form.Label>Receiver</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Issue Credential
            </Button>
            <Button className="ms-4" variant="danger">
              PDF
            </Button>
          </Form>
        </div>
        <br />
      </>
    );
}