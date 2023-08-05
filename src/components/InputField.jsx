export default function InputField({type = "text", label, name, value, onChange}) {

  return (
    <div className="md:flex md:items-center mb-6 gap-2">
      <div className="md:w-1/3">
        <label htmlFor={label} className="block text-gray-700 md:text-left mb-1 md:mb-0 pr-4">
          {name + ":"}</label></div>
          <div className="md:w-2/3">
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
              type={type}
              id={label}
              value={value}
              onChange={onChange}
            />
          </div>
        
      
    </div>
  );
}