import Button from "./Button";
import shareButtons from "../data/shareButtons";
import { useState, useEffect } from "react";

function QuoteCard(props) {
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

    props.updateColor();
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <div id="quote-box" className="bg-white w-fit max-w-xl p-10 rounded">
      <h1
        id="text"
        className={`${
          props.newColor === "slate"
            ? "text-slate-600"
            : props.newColor === "slate"
            ? "text-slate-600"
            : props.newColor === "red"
            ? "text-red-600"
            : props.newColor === "orange"
            ? "text-orange-600"
            : props.newColor === "amber"
            ? "text-amber-600"
            : props.newColor === "yellow"
            ? "text-yellow-600"
            : props.newColor === "lime"
            ? "text-lime-600"
            : props.newColor === "green"
            ? "text-green-600"
            : props.newColor === "emerald"
            ? "text-emerald-600"
            : props.newColor === "teal"
            ? "text-teal-600"
            : props.newColor === "cyan"
            ? "text-cyan-600"
            : props.newColor === "sky"
            ? "text-sky-600"
            : props.newColor === "blue"
            ? "text-blue-600"
            : props.newColor === "indigo"
            ? "text-indigo-600"
            : props.newColor === "violet"
            ? "text-violet-600"
            : props.newColor === "purple"
            ? "text-purple-600"
            : props.newColor === "fuchsia"
            ? "text-fuchsia-600"
            : props.newColor === "pink"
            ? "text-pink-600"
            : props.newColor === "rose"
            ? "text-rose-600"
            : "text-gray-600"
        } text-center text-2xl`}
      >
        <i>"</i>
        {` ${data.content}`}
      </h1>
      <p
        id="author"
        className={`${
          props.newColor === "slate"
            ? "text-slate-600"
            : props.newColor === "slate"
            ? "text-slate-600"
            : props.newColor === "red"
            ? "text-red-600"
            : props.newColor === "orange"
            ? "text-orange-600"
            : props.newColor === "amber"
            ? "text-amber-600"
            : props.newColor === "yellow"
            ? "text-yellow-600"
            : props.newColor === "lime"
            ? "text-lime-600"
            : props.newColor === "green"
            ? "text-green-600"
            : props.newColor === "emerald"
            ? "text-emerald-600"
            : props.newColor === "teal"
            ? "text-teal-600"
            : props.newColor === "cyan"
            ? "text-cyan-600"
            : props.newColor === "sky"
            ? "text-sky-600"
            : props.newColor === "blue"
            ? "text-blue-600"
            : props.newColor === "indigo"
            ? "text-indigo-600"
            : props.newColor === "violet"
            ? "text-violet-600"
            : props.newColor === "purple"
            ? "text-purple-600"
            : props.newColor === "fuchsia"
            ? "text-fuchsia-600"
            : props.newColor === "pink"
            ? "text-pink-600"
            : props.newColor === "rose"
            ? "text-rose-600"
            : "text-gray-600"
        } my-4 text-end text-xs`}
      >{`- ${data.author}`}</p>
      <div id="card-buttons" className="flex items-center bg-red-700">
        <div id="social-buttons" className="flex justify-start">
          {shareButtons.map((elem, ix) => (
            <Button
              key={ix}
              id={elem.id}
              buttonContent={elem.icon}
              altText={elem.altText}
              newColor={props.newColor}
            />
          ))}
        </div>
        <Button
          id="new-quote"
          buttonContent="New Quote"
          onClick={updateQuote}
          className="mr-0"
          newColor={props.newColor}
        />
      </div>
    </div>
  );
}

export default QuoteCard;
