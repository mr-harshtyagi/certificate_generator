import { useContext} from "react";
import "./terminal.css";
import FormContext from "../FormContext";
export default function Terminal() {
    const {show} = useContext(FormContext);
  return (
    <div style={{ padding: "10px" }}>
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <p className="line1">
          <span>IDX@Network:~$</span> Connected to IDX Network...
        </p>
        <br />
        <p style={{ display: show.d1 }} className="line1">
          <span>IDX@Network:~$</span> Creating transaction data hash
        </p>
        <br />
        <p style={{ display: show.d2 }} className="line1">
          <span>IDX@Network:~$</span> Creating Signatures
        </p>
        <br />
        <p style={{ display: show.d3 }} className="line1">
          <span>IDX@Network:~$</span> Encrypting transaction data
        </p>
        <br />
        <p style={{ display: show.d4 }} className="line1">
          <span>IDX@Network:~$</span> Commiting transaction logs to IDX
          Blockchain
        </p>
        <br />
        <p style={{ display: show.d5 }} className="line1">
          <span>IDX@Network:~$</span> Transaction {show.hash} posted
          successfully
        </p>
        <br />
        <p style={{ display: show.d6 }} className="line1">
          <span>IDX@Network:~$</span> Certificate Generated Successfully
        </p>
        <br />
        <p style={{ display: show.d6 }} className="line1">
          <span>IDX@Network:~$</span> Visit{" "}
          <a href="https://react-app-testing.vercel.app/">IDX Block Explorer</a>{" "}
          to view this transaction
        </p>
      </div>
    </div>
  );
}
