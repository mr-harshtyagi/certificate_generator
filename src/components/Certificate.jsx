
export default function Certificate() {
  return (
    <>
      <div
        style={{
          marginTop: "35px",
          marginLeft: "20px",
          borderStyle: "solid",
          borderWidth: "8px",
          borderColor: "#446A46",
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
            style={{ width: "300px", marginTop: "80px" }}
            src="images/logo.png"
            alt="logo"
          />
        </div>
        <div
          style={{
            height: "450px",
            margin: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "#FAF5E4",
              height: "100px",
              borderRadius: "10px",
            }}
          >
            <img
              src="images/logo.png"
              alt="logo"
              style={{ height: "80px", margin: "12px",float:"left" }}
            />
            <h1 style={{ paddingTop:"10px" }}>
              BITS PILANI GOA
            </h1>
            <h6> Pilani | Goa | Hyderabad | Dubai</h6>
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
            <h2>Mr. Harsh Tyagi</h2>
            <h1
              style={{
                fontFamily: "Tiro Bangla",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              has successfully completed IT bootcamp's
            </h1>
            <h3>"Blockchain Development Course"</h3>
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
              style={{ float: "left", marginLeft: "20px", marginTop: "20px" }}
            >
              <h6>Issued on: </h6>
              <h5>{new Date().toDateString()}</h5>
            </div>
            <div style={{ float: "right", marginRight: "20px" }}>
              <img
                style={{ height: "70px", marginTop: "15px", float: "right" }}
                src="images/sign.jpg"
                alt="signature"
              />
              <h6>Prof. Sukanta Mondal</h6>
              <h6>CS Department</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
