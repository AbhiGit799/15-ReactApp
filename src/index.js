import react from "react";
import reactDOM from "react-dom/client";
import { App } from "./app";

export default function AIndex() {
    return (
    <>
        <App/>
    </>
    )
  }
  
  const aroot = reactDOM.createRoot(document.getElementById("root"));
  aroot.render(<AIndex/>)



