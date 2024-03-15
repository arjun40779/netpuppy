import React from "react";

const Input = ({ type, placeholder }) => {
	return (
		<input
			className=" w-full border-none outline-none px-4 py-2 text-sm rounded-md"
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
