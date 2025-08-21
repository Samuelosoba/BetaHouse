import React, { useEffect } from "react";
import Approute from "./Routes/Approute";

export default function App() {
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", "light");
    }, []);
  return <Approute />;
}
