const Button = ({ label, onChange, checked }) => (
  <>
    <input
      type="radio"
      id={label}
      onChange={onChange}
      checked={checked}
      value={label}
    />
    <label htmlFor={label}>{label}</label>
  </>
);

export default Button;
