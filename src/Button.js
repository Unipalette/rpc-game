function Button({ children, onClick }) {
  return (
    <button className="btn-reset" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
