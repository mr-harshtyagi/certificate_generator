import { createContext, useState } from "react";

const FormContext = createContext();
export function FormProvider({ children }) {
  const [name, setName] = useState("X")
  const [course, setCourse] = useState("X");
  const [professor, setProfessor] = useState("X");


  return (
    <FormContext.Provider
      value={{ name,course,professor,setCourse,setName,setProfessor }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
