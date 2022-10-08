import QuoteCard from "./components/QuoteCard";
import { useState, useEffect } from "react";

const COLORS = [
  "slate",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

function App() {
  const [color, setColor] = useState("teal");

  function pickRandomColor() {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    console.log(newColor);
    setColor(newColor);
  }

  return (
    <main
      className={`${ // Cannot assign a dynamic name using JS and strinc concatenation because Tailwind CSS wont reconnize the class
        color === "slate"
          ? "bg-slate-600"
          : color === "red"
          ? "bg-red-600"
          : color === "orange"
          ? "bg-orange-600"
          : color === "amber"
          ? "bg-amber-600"
          : color === "yellow"
          ? "bg-yellow-600"
          : color === "lime"
          ? "bg-lime-600"
          : color === "green"
          ? "bg-green-600"
          : color === "emerald"
          ? "bg-emerald-600"
          : color === "teal"
          ? "bg-teal-600"
          : color === "cyan"
          ? "bg-cyan-600"
          : color === "sky"
          ? "bg-sky-600"
          : color === "blue"
          ? "bg-blue-600"
          : color === "indigo"
          ? "bg-indigo-600"
          : color === "violet"
          ? "bg-violet-600"
          : color === "purple"
          ? "bg-purple-600"
          : color === "fuchsia"
          ? "bg-fuchsia-600"
          : color === "pink"
          ? "bg-pink-600"
          : color === "rose"
          ? "bg-rose-600"
          : "bg-gray-600"
      } h-screen w-screen flex items-center justify-center flex-col`}
    >
      <QuoteCard newColor={color} updateColor={pickRandomColor} />
      <a href="https://github.com/AlexDeLara/" target="_blank" className="mt-6"><p>By AlexDeLara</p></a>
    </main>
  );
}

export default App;
