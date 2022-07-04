import { useState, useEffect } from "react";
import Data from "./Data";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        setJsonData(response);
      })
      .then(() => setLoading(false));

    // setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <h1>{jsonData.url}</h1>}
    </>
  );
}

export default App;
