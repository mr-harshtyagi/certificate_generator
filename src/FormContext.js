import { createContext, useState } from "react";

const FormContext = createContext();
export function FormProvider({ children }) {
  const [name, setName] = useState("X")
  const [course, setCourse] = useState("X");
  const [professor, setProfessor] = useState("X");
    const [show, setShow] = useState({
      d1: "none",
      d2: "none",
      d3: "none",
      d4: "none",
      d5: "none",
      d6: "none",
      hash:""
    });


  return (
    <FormContext.Provider
      value={{ name,course,professor,show,setShow,setCourse,setName,setProfessor }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
