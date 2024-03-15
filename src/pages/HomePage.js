import React from "react";
import SectionA from "../components/homepage/SectionA";
import SectionB from "../components/homepage/SectionB";
import AdmForm from "../components/admission/AdmForm";

const HomePage = () => {
	return (
		<div>
			<SectionA />
			<AdmForm />
			<SectionB />
		</div>
	);
};

export default HomePage;
