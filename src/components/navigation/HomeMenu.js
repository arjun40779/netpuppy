import React from "react";
const menuList = [
	[
		"Our History",
		"Why Choose Us?",
		"Vision and Mission",
		"Awards & Achievement",
		"Headmaster's Profile",
		"Our Management",
		"Our Advisors",
		"Virtual Tour",
	],
	[
		"Pedagogy",
		"CBSE Affiliation",
		"Curriculum",
		"Publications",
		"Streams Offered",
		"International Tie-Ups",
	],
	[
		"Patoral Care",
		"Food & Nutrientations",
		"Facilities",
		"Infirmary & Medical Services",
		"House System",
	],
	["Sports Services", "Club & Societies", "Music & Dance"],
	[
		"Admission Procedure",
		"Registration Procedure",
		"Admission Process",
		"Registration Process",
		"Scholarship Program",
		"Withdraw Procedure",
		"Pay Fee Online",
	],
	["Celebrations", "Confluence"],
	["Blogs", "Contacts", "Newsletter", "Careers"],
];
const HomeMenu = ({ actId }) => {
	return (
		<div className="w-[600px] h-screen bg-yellow-100 flex flex-col justify-center">
			{menuList[actId - 1].map((item, index) => {
				return (
					<div
						key={index}
						className="  flex 
                    items-center
                    py-4
                    ml-16
                    border-b
                    border-black
                    w-[300px]
                    cursor-pointer
                    "
					>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default HomeMenu;
