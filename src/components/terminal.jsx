import "./terminal.css"
export default function Terminal() {
  return (
    <div style={{ padding: "10px" }}>
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <p className="line1">
          <span>IDX@Network:~$</span> Creating Signatures
        </p>
        <br />
        <p className="line1">
          <span>IDX@Network:~$</span> Encrypting Transaction Data
        </p>
        <br />
        <p className="line1">
          <span>IDX@Network:~$</span> Commiting Transaction logs to IDX
          Blockchain
        </p>
        <br />
        <p className="line1">
          <span>IDX@Network:~$</span> Transaction 0x3487ucb238ryyb273rfbc posted
          successfully
        </p>
        <br />
        <p className="line1">
          <span>IDX@Network:~$</span> Visit{" "}
          <a href="https://react-app-testing.vercel.app/">IDX Block Explorer</a>{" "}
          to view transaction
          <span className="cursor1">_</span>
        </p>
      </div>
    </div>
  );
}
