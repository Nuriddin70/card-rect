import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../components/config";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
    .then((response) => response.json())
    .then((data) =>{
      setGoods(data.featured && setGoods(data.featured))
      setLoading(false)
    })
  }, []);
  return (
    <div className="content container">
      <h1>shop</h1>
    </div>
  );
}
