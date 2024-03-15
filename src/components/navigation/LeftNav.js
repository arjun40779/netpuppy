import { React, useState } from "react";
import ListItem from "./ListItem";
import HomeMenu from "./HomeMenu";
const listItems = [
	"Home",
	"About TIS",
	"Academics",
	"Boarding Life",
	"Beyond Academics",
	"Admission",
	"Events",
	"Quick Link",
];
const LeftNav = () => {
	const [actId, setActId] = useState(0);
	const changeActId = (id) => {
		setActId(id);
	};
	return (
		<div className="flex absolute left-0 top-0 z-1">
			<div
				className="w-[600px] h-screen flex justify-center flex-col text-start
        border-r-4 border-gray-200
        "
			>
				{listItems.map((item, i) => {
					return (
						<ListItem
							changeActId={changeActId}
							id={i}
							actId={actId}
							title={item}
						/>
					);
				})}
			</div>
			{actId !== 0 && <HomeMenu actId={actId} />}
		</div>
	);
};
export default LeftNav;
