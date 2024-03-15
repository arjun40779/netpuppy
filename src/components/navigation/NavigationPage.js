import React, { useState } from "react";
import NavTop from "./NavTop";
import LeftNav from "./LeftNav";

const NavigationPage = () => {
	return (
		<div className="bg-white w-screen h-screen fixed">
			<NavTop />
			<LeftNav />{" "}
		</div>
	);
};

export default NavigationPage;
