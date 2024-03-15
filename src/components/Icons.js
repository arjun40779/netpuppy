import React from "react";

const Icons = ({ src, title }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img className=" h-35px]" src={src} alt="" />
			<p className=" text-xs">{title}</p>
		</div>
	);
};

export default Icons;
