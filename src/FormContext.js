import { createContext, useState } from "react";

const FormContext = createContext();
export function FormProvider({ children }) {
  const [name, setName] = useState("X")
  const [course, setCourse] = useState("X");
  const [professor, setProfessor] = useState("X");
  const [cert_id, setCertId] = useState("XXXXXXXX");
  const [timeStamp, setTime] = useState("$Time Stamp$");

    const [show, setShow] = useState({
      d1: "none",
      d2: "none",
      d3: "none",
      d4: "none",
      d5: "none",
      d6: "none",
      hash:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    });


  return (
    <FormContext.Provider
      value={{ name,course,professor,show,timeStamp,setTime,cert_id,setCertId,setShow,setCourse,setName,setProfessor }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
