import { useState } from "react";
import "./App.css";
import NavigationPage from "./components/navigation/NavigationPage";
import HomePage from "./pages/HomePage";
import logo from "./assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./components/Footer/Footer";
const btnColor = {
	backgroundColor: "rgb(96, 186, 177)",
};
function App() {
	const [navVisible, setNavVisible] = useState(false);
	return (
		<div className="App">
			<div onClick={() => setNavVisible(false)}>
				<img
					className="z-50 top-4 left-4 rounded-full h-[80px] w-[80px] fixed"
					src={logo}
					alt="logo"
				/>
			</div>
			<div
				onClick={() => setNavVisible(!navVisible)}
				style={btnColor}
				className=" z-50 fixed rounded-full flex items-center justify-center h-[80px] w-[80px] right-4 top-4"
			>
				<GiHamburgerMenu size={34} className=" text-white " />
			</div>
			{navVisible ? (
				<>
					<NavigationPage />
				</>
			) : (
				<>
					<HomePage />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
