import FormContext from "../FormContext";
import { useContext } from "react";
import {useNavigate } from "react-router-dom";

export default function Certificate() {
  let navigate =useNavigate();
  const { name,course,professor,timeStamp,cert_id,show } = useContext(FormContext);
  return (
    <>
      <div
        style={{
          marginTop: "35px",
          marginLeft: "20px",
          borderStyle: "solid",
          borderWidth: "8px",
          borderColor: "#446A46",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            height: "450px",
            width: "680px",
            margin: "20px",
            position: "absolute",
            zIndex: "-1",
            opacity: "0.1",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "300px",
              marginTop: "80px",
              marginLeft: "55px",
            }}
            src="images/logo.png"
            alt="logo"
          />
        </div>
        <div
          style={{
            height: "470px",
            margin: "10px",
          }}
        >
          <p
            onClick={() => {
              window.open(
                `https://react-app-testing.vercel.app/transaction/${show.hash}`,
                "_blank",
                "noopener,noreferrer"
              );
            }}
            style={{
              padding: "0",
              float: "right",
              fontSize: "0.8rem",
              marginRight: "10px",
              cursor: "pointer",
              marginTop: "0px",
              textDecoration: "none",
              color: "grey",
            }}
          >
            Document Hash : {show.hash}
          </p>

          <br />
          <div
            style={{
              width: "100%",
              backgroundColor: "#FAF5E4",
              height: "110px",
              borderRadius: "10px",
            }}
          >
            <img
              src="../../images/logo.png"
              alt="logo"
              style={{
                height: "80px",
                margin: "12px",
                marginTop: "0px",
                float: "left",
              }}
            />
            <h1 style={{ paddingTop: "10px" }}>BITS PILANI GOA</h1>
            <h6> Pilani | Goa | Hyderabad | Dubai</h6>
            <div
              style={{
                float: "right",
                marginRight: "30px",
                marginTop: "-50px",
              }}
            >
              <p
                style={{
                  fontSize: " 1rem",
                  padding: "3px",
                  fontWeight: "900",
                  fontFamily: "monospace",
                  whiteSpace: "normal",
                  border: "solid 2px",
                  borderRadius: "10px",
                }}
              >
                Certificate ID: {cert_id}
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              This certifies that
            </h1>
            <div style={{ color: "#446A46" }}>
              <h2>~ {name} ~</h2>
            </div>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              has successfully completed IT bootcamp's
            </h1>
            <h3>" {course} "</h3>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1rem",
                marginTop: "10px",
              }}
            >
              Developer Certification, representing approximately 100 hrs of
              coursework
            </h1>
            <hr />
            <div
              style={{
                float: "left",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <h6>Issued on: </h6>
              <h5>{timeStamp}</h5>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              <button
              style={{display: show.d6}}
                onClick={() => {
                  window.open(
                    `https://idx-certificate-viewer.vercel.app/${
                      Number(cert_id) - 10000000
                    }/${show.hash}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="btn btn-primary"
              >
                View Certificate
              </button>
            </div>
            <div style={{ float: "right", marginRight: "20px" }}>
              <div style={{ marginTop: "25px" }} />

              <h6>{professor}</h6>
              <h6 style={{ fontSize: "0.7rem" }}>CSE Department, Goa Campus</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
