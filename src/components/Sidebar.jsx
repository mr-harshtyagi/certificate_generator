import { FaAddressCard, FaHandshake } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";


export default function Sidebar() {
  return (
    <div style={{ height: "100vh", width: "60px", backgroundColor: "#001D6E",position:"fixed" }}>
      <WorkspacePremiumOutlinedIcon
        style={{
          color: "white",
          fontSize: "3.2rem",
          padding: "5px",
          marginTop: "120px",
          marginLeft: "5px",
        }}
      />
      <FaAddressCard
        style={{
          color: "white",
          fontSize: "3rem",
          marginTop: "20px",
          padding: "5px",
          marginLeft: "5px",
        }}
      />
      <FaHandshake
        style={{
          color: "white",
          fontSize: "3rem",
          marginTop: "20px",
          padding: "5px",
          marginLeft: "5px",
        }}
      />
      <BsFillPenFill
        style={{
          color: "white",
          fontSize: "2.5rem",
          marginTop: "20px",
          padding: "5px",
          marginLeft: "7px",
        }}
      />
      <HiPlusCircle
        style={{
          color: "white",
          fontSize: "3rem",
          marginTop: "20px",
          padding: "5px",
          marginLeft: "5px",
        }}
      />
    </div>
  );
}
