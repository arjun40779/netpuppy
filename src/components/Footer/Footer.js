import React from "react";
import FooterBtn from "./FooterBtn";

const Footer = () => {
	return (
		<div className="footer w-full">
			<div className="bg-black opacity-85  p-32 flex flex-col items-center gap-8 justify-center text-white">
				<div className="w-1/3 flex flex-col gap-4">
					<div className="font-semibold text-3xl">BECOME A PART OF THE...</div>
					<div className="font-semibold text-4xl text-red-600 flex justify-end">
						TULA’S FAMILY
					</div>
					<div className="text-center text-xs">
						VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR Dehradun,
						Uttarakhand, 248197
					</div>
					<div></div>
					<div className="flex justify-around">
						<span>(+91) 9458311000 </span>
						<span>info@tis.edu.in</span>
					</div>
				</div>
				<div className="flex gap-16">
					<FooterBtn label={"VIRTUAL TOUR"} />
					<FooterBtn label={"APPLY NOW"} />
					<FooterBtn label={"fedena LOGIN"} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
