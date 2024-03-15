import React from "react";
import Input from "./Input";
import formbtm from "./../../assets/formbtm.jpg";

const AdmForm = () => {
	return (
		<>
			<div className="adm-form p-32 flex justify-center items-center ">
				<div className="py-8 rounded-md w-[400px] bg-red-600 flex flex-col px-16 gap-2 border-4 border-white  ">
					<h2 className="text-white font-bold text-2xl py-2">
						Admissions Open 2021
					</h2>
					<Input placeholder={"Enter Name"} type={"text"} />
					<Input placeholder={"Enter Email Address"} type={"email"} />
					<Input placeholder={"Enter Mobile Number"} type={"tel"} />
					<Input placeholder={"Select State"} type={"text"} />
					<Input placeholder={"Select City"} type={"text"} />
					<Input placeholder={"Select Class"} type={"text"} />
					<div className="flex justify-between gap-4 text-sm">
						<div className="bg-black px-4 rounded-md py-2 text-white">
							2b7a6@3
						</div>

						<Input placeholder={"Enter Captcha"} type={"text"} />
					</div>
					<div className="text-white">
						<input type="checkbox" />
						<span className="text-sm">I agree to the terms and conditions</span>
					</div>
					<button
						className=" bg-btn text-white py-2 px-4 rounded-md"
						type="submit"
					>
						Enquire Now!
					</button>
				</div>
			</div>
			<img className="w-full" src={formbtm} alt="form footer" />
		</>
	);
};

export default AdmForm;
