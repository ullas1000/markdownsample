import React, { useEffect, useState } from "react";
import readmePath from "./README.md";
import { marked } from "marked";
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setData(marked(text));
      });
  }, []);
  return (
    <React.Fragment>
      <article dangerouslySetInnerHTML={{ __html: data }} />
    </React.Fragment>
  );
}

export default App;
