function ChildButton({ onIncrease }) {
  return (
    <button onClick={onIncrease} style={{ marginTop: "20px" }}>
      Increase Parent Counter
    </button>
  );
}

export default ChildButton;
