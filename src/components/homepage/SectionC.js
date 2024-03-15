import React from "react";
import { FaPlay } from "react-icons/fa";
import vidThumb from "../../assets/vidThumb.jpg";
import Button from "../Button";
import img1 from "../../assets/whyTIS/img1.jpg";
import img2 from "../../assets/whyTIS/img2.jpg";
import Icons from "../Icons";
import campus from "../../assets/whyTIS/campus.svg";
import expert from "../../assets/whyTIS/expert.svg";
import management from "../../assets/whyTIS/management.svg";
import ratio from "../../assets/whyTIS/ratio.svg";
import training from "../../assets/whyTIS/training.svg";

const SectionC = () => {
	return (
		<>
			{" "}
			<div className="h-full relative">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className=" bg-white z-100 rounded-2xl h-[100px] w-[150px]">
						<FaPlay
							size={50}
							className="z-50  text-black   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</div>
					<div className="bg-black z-10 opacity-50 absolute inset-0"></div>
				</div>
				<img className="h-[100%] z-10" src={vidThumb} alt="vidThumb" />
			</div>
			<div className="flex w-full relative gap-10 p-16">
				<div className="w-1/2 flex items-center justify-center">
					<img className="w-[300px]" src={img1} alt="img1" />
				</div>
				<div className="w-1/2 p-16 flex flex-col gap-10">
					<h2 className="font-bold text-red-700 text-3xl">
						At Tula’s, we ask, “How can we make school better?”
					</h2>
					<p>
						Using the latest research on how girls learn best, we designed an
						innovative modular schedule, personalized for each student. Our
						girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying
						here. Develop leadership skills, build compassion, gain
						responsibility, and prepare to change the world.
					</p>
					<div className="w-1/2 flex self-end">
						<Button label={"Learn More"} />
					</div>
				</div>
			</div>
			<div className=" text-center mb-4 text-5xl font-bold">
				Why <span className="text-red-700">TIS?</span>
			</div>
			<div className="flex">
				<div className="w-1/2 px-32 py-16">
					<div className="w-full">
						<h2 className="text-2xl font-semibold">A FOCUS ON...</h2>
					</div>
					<div className="w-full">
						<h2 className=" pl-16 text-3xl font-semibold text-red-700">
							MANAGEMENT
						</h2>
					</div>
					<p className="mt-16">
						Extremely Friendly and Approachable Management. Tula’s International
						School combines – respect for tradition with a progressive
						application of modern sciences, academic rigour with a caring heart,
						and individual appreciation with the warmth of a school community
					</p>
				</div>
				<div>
					<img className="h-[500px]" src={img2} alt="img2" />
				</div>
				<div className="flex flex-col justify-between pb-8 px-16 ">
					<Icons src={campus} title={"campus"} />
					<Icons src={expert} title={"expert"} />
					<Icons src={management} title={""} />
					<Icons src={ratio} title={"ratio"} />
					<Icons src={training} title={"training"} />
				</div>
			</div>
		</>
	);
};

export default SectionC;
