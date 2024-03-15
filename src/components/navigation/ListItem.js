import React from "react";
import { MdDoubleArrow } from "react-icons/md";
const ListItem = ({ title, id, actId, changeActId }) => {
	return (
		<div
			onClick={() => {
				changeActId(id);
			}}
			className={` cursor-pointer font-semibold flex justify-between text-3xl py-2 px-16 ${
				actId === id ? "bg-yellow-100 text-red-700" : ""
			} `}
		>
			{title} {0 !== id && <MdDoubleArrow />}
		</div>
	);
};

export default ListItem;
