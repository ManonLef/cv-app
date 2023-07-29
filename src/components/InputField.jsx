export default function InputField({type = "text", label, name, value, onChange}) {

  return (
    <div>
      <label htmlFor={label}>
        {name + ":"}
        <input
          type={type}
          id={label}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}