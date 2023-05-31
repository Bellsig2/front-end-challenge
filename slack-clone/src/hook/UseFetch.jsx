import { useEffect } from "react";
import { useState } from "react";
export default function useFetch({ url, init }) {
  const [data, setData] = useState(init);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return data;
}
