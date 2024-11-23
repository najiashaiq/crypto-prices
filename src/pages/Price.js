import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const { symbol } = useParams(); 
  const apiKey = "494B3A0D-4EED-4B78-A952-62A2B978CB54"; 
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCoinData();
  }, [url]);

  const loading = () => <h1>Loading...</h1>;

  const loaded = () => (
    <div className="price">
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>${coin.rate}</h2>
    </div>
  );

  return coin ? loaded() : loading();
}