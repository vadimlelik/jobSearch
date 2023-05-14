const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className="">
      <label htmlFor={name} className="">
        {label}
      </label>
      <select
        className=""
        id={name}
        name={name}
        value={value}
        placeholder="Выберете отрасль"
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray?.length > 0 &&
          optionsArray.map((option) => (
            <option value={option.key} key={option.key}>
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
