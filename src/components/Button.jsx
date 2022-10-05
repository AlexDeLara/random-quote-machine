function Button(props) {
  return (
    <button
      id={props.id}
      alt={props.altText}
      onClick={props.onClick}
      className={`${ // Cannot assign a dynamic name using JS and strinc concatenation because Tailwind CSS wont reconnize the class
        props.newColor === "slate"
          ? "bg-slate-600 hover:bg-slate-500"
          : props.newColor === "red"
          ? "bg-red-600 hover:bg-red-500"
          : props.newColor === "orange"
          ? "bg-orange-600 hover:bg-orange-500"
          : props.newColor === "amber"
          ? "bg-amber-600 hover:bg-amber-500"
          : props.newColor === "yellow"
          ? "bg-yellow-600 hover:bg-yellow-500"
          : props.newColor === "lime"
          ? "bg-lime-600 hover:bg-lime-500"
          : props.newColor === "green"
          ? "bg-green-600 hover:bg-green-500"
          : props.newColor === "emerald"
          ? "bg-emerald-600 hover:bg-emerald-500"
          : props.newColor === "teal"
          ? "bg-teal-600 hover:bg-teal-500"
          : props.newColor === "cyan"
          ? "bg-cyan-600 hover:bg-cyan-500"
          : props.newColor === "sky"
          ? "bg-sky-600 hover:bg-sky-500"
          : props.newColor === "blue"
          ? "bg-blue-600 hover:bg-blue-500"
          : props.newColor === "indigo"
          ? "bg-indigo-600 hover:bg-indigo-500"
          : props.newColor === "violet"
          ? "bg-violet-600 hover:bg-violet-500"
          : props.newColor === "purple"
          ? "bg-purple-600 hover:bg-purple-500"
          : props.newColor === "fuchsia"
          ? "bg-fuchsia-600 hover:bg-fuchsia-500"
          : props.newColor === "pink"
          ? "bg-pink-600 hover:bg-pink-500"
          : props.newColor === "rose"
          ? "bg-rose-600 hover:bg-rose-500"
          : "bg-gray-600 hover:bg-gray-500"
      } rounded text-white font-sans p-2 h-[2.5rem] min-w-[2.5rem] text-center flex items-center justify-center`}
    >
      {props.buttonContent}
    </button>
  );
}

export default Button;
