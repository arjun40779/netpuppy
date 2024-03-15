import React from "react";
import img1 from "../../assets/secB1.jpg";
import img2 from "../../assets/secB2.jpg";
import swimming from "../../assets/swimming.svg";
import taekwando from "../../assets/taekwando.jpg";
import horseRidding from "../../assets/horseRiding.jpg";
import seeMore from "../../assets/see more.svg";
import Button from "../Button";
const SectionB = () => {
	return (
		<>
			<div className="flex w-full">
				<div className="w-[70%] ml-32 flex flex-col gap-8 mt-32">
					<h2 className="text-2xl text-red-800">
						We are Supported and Inspired
					</h2>
					<p>
						Whether it's academics, music, art, or drama. Tul'a is best at
						unlock tge potential of students. We help our students to bring out
						their creative sides. We are more than just school. Instead, TIS is
						a canvas of opportunities.
					</p>
				</div>
				<div>
					<img className=" w-full" src={img1} alt="img2" />
				</div>
			</div>
			<div className="w-full flex p-16 pt-0 mt-[-200px]">
				<div>
					<img src={img2} alt="img2" />
				</div>
				<div className="w-[70%] ml-32 flex flex-col gap-8 mt-32">
					<h2 className="text-2xl text-red-800">
						We are Supported and Inspired
					</h2>
					<p className="flex text-wrap">
						Whether it's academics, music, art, or drama. Tul'a is best at
						unlock tge potential of students. We help our students to bring out
						their creative sides. We are more than just school. Instead, TIS is
						a canvas of opportunities.
					</p>
				</div>
			</div>
			<div className="flex p-8 ">
				<div className="flex flex-col p-8  h-full items-center gap-16 w-[100%]">
					<div className="">
						<h2 className="text-3xl font-bold">
							Our commitment to all-round development shines in diverse
							extracurricular activities.
						</h2>
						<h3 className="text-2xl font-semibold text-cyan-600">
							( Our Students love that! )
						</h3>
					</div>
					<div>
						<img src={swimming} alt="swimming" />
					</div>
					<Button label={"See All Activities"} />
				</div>
				<div className="w-[250px] flex h-full self-center items-center align-middle ">
					<img src={seeMore} alt="seeMore" />
				</div>
				<div className="w-full flex flex-col gap-16">
					<img className="w-[70%] " src={taekwando} alt="taekwando" />
					<img
						className="w-[70%] ml-16"
						src={horseRidding}
						alt="horseRidding"
					/>
				</div>
			</div>
		</>
	);
};

export default SectionB;
