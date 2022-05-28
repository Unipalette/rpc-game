import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handleBtnClick = () => {
    onClick(value);
  };
  return (
    <button className="btn" onClick={handleBtnClick}>
      <HandIcon value={value} />
    </button>
  );
}
export default HandButton;
