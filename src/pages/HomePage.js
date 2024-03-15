import React from "react";
import SectionA from "../components/homepage/SectionA";
import SectionB from "../components/homepage/SectionB";
import Sectionc from "../components/homepage/SectionC";
import AdmForm from "../components/admission/AdmForm";

const HomePage = () => {
	return (
		<div>
			<SectionA />
			<AdmForm />
			<SectionB />
			<Sectionc />
		</div>
	);
};

export default HomePage;
