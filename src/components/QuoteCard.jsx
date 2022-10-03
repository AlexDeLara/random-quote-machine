import Button from "./Button";
import shareButtons from "../data/shareButtons";
import { useState, useEffect } from "react";

function QuoteCard() {
  const [data, setData] = useState();

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error(`ERROR ${response.status}: ${response.statusText}`);
      }
      setData(await response.json());
    } catch (error) {
      console.log(error);
      setData({ content: "Oops! Something went wrong" });
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if(!data) return null;

  return (
    <div id="quote-box">
      <h1 id="text">
        <i>"</i>
        {` ${data.content}`}
      </h1>
      <p id="author">{`- ${data.author}`}</p>
      <div id="card-buttons">
        <div id="social-buttons">
          {shareButtons.map((elem, ix) => (
            <Button
              key={ix}
              id={elem.id}
              buttonContent={elem.icon}
              altText={elem.altText}
            />
          ))}
        </div>
        <Button
          id="new-quote"
          buttonContent="New Quote"
          onClick={updateQuote}
        />
      </div>
    </div>
  );
}

export default QuoteCard;
