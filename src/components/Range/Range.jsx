import "./Range.css";

export const Range = ({
  id,
  name,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) => {
  return (
    <div className="range_label">
      <label htmlFor={id}>{name}</label>
      <div style={{ color: "blue", width: "35px" }}>{value}</div>
      <input
        id={id}
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        step={step}
      />
    </div>
  );
};
