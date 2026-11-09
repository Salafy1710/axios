import { useState, useEffect } from "react";
import request from "../axios";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [errorQuotes, setErrorQuotes] = useState(null);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await request.get('/quotes');
        setQuotes(response.data.quotes);

        if (!response.ok) {
          throw new Error("error wuoyyy");
        }

        const data = await response.json();

        setQuotes(data.quotes);
      } catch (error) {
        setErrorQuotes(error);
      }
    };

    getQuotes();
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => {
        return (
          <div key={index}>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Quotes;