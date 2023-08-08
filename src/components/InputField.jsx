import PropTypes from "prop-types";

export default function InputField(props) {
  return (
    <div className="md:flex md:items-center mb-6 gap-2">
      <div className="md:w-1/3">
        <label
          htmlFor={props.label}
          className="block text-white md:text-left mb-1 md:mb-0 pr-4">
          {props.name + ":"}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="appearance-none opacity-70 border-2 border-slate-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:opacity-100 focus:border-purple-600"
          type={props.type}
          id={props.label}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
};

InputField.defaultProps = {
  type: "text",
};
