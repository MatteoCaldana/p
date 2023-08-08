import React, { useEffect, useState } from 'react';
import init, { add } from "wasm";

function Wasm() {
  const [ans, setAns] = useState(null);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, [])
  return (
    <p>1 + 1 = {ans === null ? "?" : ans}</p>
  );
}

export default Wasm;