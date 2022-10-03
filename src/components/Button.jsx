function Button(props) {
  return (
    <button id={props.id} alt={props.altText} onClick={props.onClick}>
      {props.buttonContent}
    </button>
  );
}

export default Button;
