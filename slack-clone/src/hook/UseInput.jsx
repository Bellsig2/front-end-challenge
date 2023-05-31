import { useState } from "react";

export default (init = null) => {
  const [data, setData] = useState(init);
  const hanlder = (e) => {
    let value = e.target.value;
    setData(value);
  };
  return [data, hanlder];
};
