import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormContext from "../FormContext";
import { useContext, useState } from "react";
import axios from 'axios';
var CryptoJS = require("crypto-js");

export default function SideForm(){
  const { name,course,professor,setName,setCourse,setProfessor } = useContext(FormContext); 
  const [secretKey,setSecretKey] =useState("")
  const privateKey = "F9LwFF7Jmuf2w7icRk3MTBozP333i8TWKKAFmbfrUHVT";
  const publicKey = "GjgJq7htpLt3rYFTPUyqKBtanupjjuwy6mtYvattKNpN";

  function postDataToServer(){
    let certificateData={
      name:name,
      course:course,
      professor:professor
    }
    let hash = CryptoJS.SHA256(JSON.stringify(certificateData)).toString(
      CryptoJS.enc.Hex
    );

    let dataObject = {
      transaction_hash:hash, //hash 3 fields
      publicKey: publicKey,
      privateKey:privateKey,
      receiver: "0x1236427d1f1279d5951d61fdf5ab6476e9cf530f", //wallet address of receiver
      key:secretKey,
      signature:"faltu signature"
    };

      // axios post dataObject 
      axios
        .post("https://bigchaindb-post-txn.herokuapp.com/post", dataObject)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  
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
            <Form.Group
              onChange={(e) => {
                setSecretKey(e.target.value);
              }}
              value={secretKey}
              className="mb-3"
              controlId="key"
            >
              <Form.Label>Secret Key</Form.Label>
              <Form.Control type="text" placeholder="Enter Secret Key" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issuer">
              <Form.Label>Issuer's Public Key</Form.Label>
              <Form.Control
                onChange={() => {}}
                value="GjgJq7htpLt3rYFTPUyqKBtanupjjuwy6mtYvattKNpN"
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="receiver">
              <Form.Label>Receiver</Form.Label>
              <Form.Control
                onChange={() => {}}
                value="0x1236427d1f1279d5951d61fdf5ab6476e9cf530f"
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Issue Credential
            </Button>
            <Button onClick={postDataToServer} className="ms-4" variant="danger">
              PDF
            </Button>
          </Form>
        </div>
        <br />
      </>
    );
}