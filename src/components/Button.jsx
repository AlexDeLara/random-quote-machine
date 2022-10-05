function Button(props) {
  return (
    <button
      id={props.id}
      alt={props.altText}
      onClick={props.onClick}
      className={`${ // Cannot assign a dynamic name using JS and strinc concatenation because Tailwind CSS wont reconnize the class
        props.newColor === "slate"
          ? "bg-slate-600"
          : props.newColor === "slate"
          ? "bg-slate-600"
          : props.newColor === "red"
          ? "bg-red-600"
          : props.newColor === "orange"
          ? "bg-orange-600"
          : props.newColor === "amber"
          ? "bg-amber-600"
          : props.newColor === "yellow"
          ? "bg-yellow-600"
          : props.newColor === "lime"
          ? "bg-lime-600"
          : props.newColor === "green"
          ? "bg-green-600"
          : props.newColor === "emerald"
          ? "bg-emerald-600"
          : props.newColor === "teal"
          ? "bg-teal-600"
          : props.newColor === "cyan"
          ? "bg-cyan-600"
          : props.newColor === "sky"
          ? "bg-sky-600"
          : props.newColor === "blue"
          ? "bg-blue-600"
          : props.newColor === "indigo"
          ? "bg-indigo-600"
          : props.newColor === "violet"
          ? "bg-violet-600"
          : props.newColor === "purple"
          ? "bg-purple-600"
          : props.newColor === "fuchsia"
          ? "bg-fuchsia-600"
          : props.newColor === "pink"
          ? "bg-pink-600"
          : props.newColor === "rose"
          ? "bg-rose-600"
          : "bg-gray-600"
      } rounded text-white font-sans p-2`}
    >
      {props.buttonContent}
    </button>
  );
}

export default Button;
