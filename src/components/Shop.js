import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../components/config";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";

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
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content container">
      <Cart quantity={goods.length}/>
      {loading ? <Loader /> : <GoodList goods={goods} />}
    </div>
  );
}
