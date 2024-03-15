import React from "react";
import rightArrow from "../assets/rightArrow.svg";
const Button = ({ label }) => {
	return (
		<div className="p-8 border-2 border-yellow-500 flex gap-4 items-center cursor-pointer px-4 rounded-xl py-1">
			<span>{label}</span>
			<img src={rightArrow} alt="rightArrow" />
		</div>
	);
};

export default Button;
