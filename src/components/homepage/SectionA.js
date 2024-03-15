import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";
import img7 from "../../assets/img7.svg";
import img8 from "../../assets/img8.svg";
import bgSecA from "../../assets/bgSecA.svg";
import downArrow from "../../assets/downArrow.svg";

const SectionA = () => {
	return (
		<>
			<div className=" sectionA w-full bg-red-700 text-white">
				<div className="w-full py-4 flex items-center gap-3  justify-center ">
					<div className="flex gap-3 font-semibold border-r-2 border-white pr-3">
						<span>Inquire</span>
						<span>Apply</span>
						<span>Support</span>
					</div>
					<span>Parents</span>
					<span>Alums</span>
				</div>
				<div className="grid grid-cols-10 ">
					<img
						className=" col-start-2 row-start-1 col-span-2 row-span-2 "
						src={img1}
						alt="img1"
					/>{" "}
					<img
						className=" col-start-8 row-start-1 col-span-2 row-span-2 "
						src={img2}
						alt="img2"
					/>
					<img
						className=" col-start-2 row-start-4 col-span-3  "
						src={img3}
						alt="img3"
					/>
					<img
						className=" col-start-7 row-start-4 col-span-3 row-span-4 "
						src={img4}
						alt="img4"
					/>
					<img
						src={downArrow}
						className=" col-start-1 row-start-3 justify-self-end"
						alt="downArrow"
					/>
				</div>
			</div>
			<div className=" sectionA w-full bg-red-700 text-white">
				<div className="grid grid-cols-11 ">
					<img
						className=" rounded-full col-start-2 row-start-3 justify-self-start col-span-2 row-span-2 "
						src={img5}
						alt="img5"
					/>{" "}
					<img
						className=" col-start-3 row-start-5 col-span-2 row-span-2 "
						src={img6}
						alt="img6"
					/>
					<img
						className=" col-start-9 row-start-4 col-span-2 row-span-2"
						src={img7}
						alt="img7"
					/>
					<img
						className=" col-start-8 row-start-2 col-span-2 row-span-2 "
						src={img8}
						alt="img8   "
					/>
				</div>
			</div>
			<div className=" bg-red-700  text-white flex justify-end secA2 p-16 h-[600px] w-full">
				<div className=" text-slate-300 w-1/2 flex gap-16 flex-col items-end justify-end  h-full">
					<p className="w-[400px] mr-32">
						Tula's International School was established in 2012 under the aegis
						of Rishabh Educational Trust to impart education through seamless
						opportunities.
					</p>
					<p className="w-[400px]">
						Following the Modern Gurukul Concept, Tula's International is a
						Co-Ed Residential School with a quintessential example of a perfect
						amalgamation between the Old Gurukul System with a Modern Approach
						that aims to develop Mind, Body and Soul.
					</p>
				</div>
			</div>
		</>
	);
};

export default SectionA;
