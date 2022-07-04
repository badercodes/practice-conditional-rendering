import { useState, useEffect } from "react";
import Data from "./Data";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <Data />}
    </>
  );
}

export default App;
