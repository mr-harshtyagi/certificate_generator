import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FormContext from "../FormContext";
import { useContext, useState } from "react";
import axios from 'axios';
var CryptoJS = require("crypto-js");

export default function SideForm(){
  const { name,
    course,
    professor,
    setShow,
    setName,
    setCourse,
    setProfessor,
    setCertId } = useContext(FormContext); 
  const [secretKey,setSecretKey] =useState("identrix");
  const [receiver, setReceiver] = useState("xyz12345@gmail.com");

function postDataToServer(){
      setShow(() => ({
        d1: "none",
        d2: "none",
        d3: "none",
        d4: "none",
        d5: "none",
        d6: "none",
      }));
    let certificateData={
      name:name,
      course:course,
      professor:professor
    }
let hash = CryptoJS.SHA256(JSON.stringify(certificateData)).toString(CryptoJS.enc.Hex);
setShow((prevData)=>({...prevData,d1:""}))
      axios
        .get("https://bigchaindb-post-txn.herokuapp.com/getcertid")
        .then(function (response) {
          let id = response.data.id;
          setCertId(10000000+ Number(id));
             setTimeout(() => {
               setShow((prevData) => ({ ...prevData, d2: "" }));
               setTimeout(() => {
                 setShow((prevData) => ({ ...prevData, d3: "" }));
                 setTimeout(() => {
                  setShow((prevData) => ({ ...prevData, d4: "" }));
                  let dataObject = {
                    doc_uid: id,
                    transaction_hash: hash,
                    receiver:
                      receiver.slice(0, 2) +
                      "*****" +
                      receiver.substring(
                        receiver.indexOf("@"),
                        receiver.length
                      ),
                    key: secretKey,
                  };
                   axios
                     .post(
                       "https://bigchaindb-post-txn.herokuapp.com/post",
                       dataObject
                     )
                     .then(function (response) {
                       console.log(response.data);
                       setShow((prevData) => ({
                         ...prevData,
                         hash: response.data.hash,
                       }));
                       setShow((prevData) => ({ ...prevData, d5: "" }));
                       axios
                         .post(
                           "https://bigchaindb-post-txn.herokuapp.com/posttomongo",
                           {
                             doc_uid: id, //get from server certificate no.
                             hash: hash,
                             certificate_data: certificateData,
                           }
                         )
                         .then(function (response) {
                           setShow((prevData) => ({ ...prevData, d6: "" }));
                         })
                         .catch(function (error) {
                           console.log(error);
                         });
                     })
                     .catch(function (error) {
                       console.log(error);
                     });
                 }, 100);
               }, 100);
             }, 100); 
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
            <Form.Group className="mb-3" controlId="key">
              <Form.Label>Secret Key</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSecretKey(e.target.value);
                }}
                value={secretKey}
                type="text"
                placeholder="Enter Secret Key"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issuer">
              <Form.Label>Issuer's Public Key</Form.Label>
              <Form.Control
                onChange={() => {}}
                value="GjgJq7htpLt3rYFTPUyqKBtanupjjuwy6mtYvattKNpN"
                type="text"
                placeholder="IDX's Default Public Key"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="receiver">
              <Form.Label>Receiver</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setReceiver(e.target.value);
                }}
                value={receiver}
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>

            <Button onClick={postDataToServer} variant="primary" type="submit">
              Issue Credential
            </Button>
          </Form>
        </div>
        <br />
      </>
    );
}