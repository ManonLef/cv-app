import PropTypes from "prop-types";

export default function HeaderTwo(props) {
  return (
    <h2 className="w-full max-w-xl py-2 mb-2 mt-4 text-xl  text-white font-semibold">
      {props.text}
    </h2>
  );
}

HeaderTwo.propTypes = {
  text: PropTypes.string,
};
