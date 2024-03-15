import React from "react";

const NavTop = () => {
	return (
		<div>
			<div className="z-10 relative bg-red-700 flex gap-16 text-white py-4 justify-center">
				<div
					className=" font-semibold flex gap-16
                border-r-2 pr-16"
				>
					<span>APPLY</span>
					<span>WHY CHOOSE US</span>
					<span>REGISTRATION</span>
				</div>
				<span>AWARD</span>
				<span>VIRTUAL TOUR</span>
			</div>
		</div>
	);
};

export default NavTop;
