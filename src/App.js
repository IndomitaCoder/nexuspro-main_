import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WhyNexusPro from './pages/WhyNexusPro';
import Header from './components/Layout/Header';
import { useEffect, useState, useMemo } from 'react';
import { ModeProvider } from './ModeContext';
import Footer from 'components/Layout/Footer/Footer';
import HowItWorks from 'pages/HowItWorks';
import News from 'pages/News';
import Transparency from 'pages/Transparency';
import AboutUs from 'pages/AboutUs';
import Products from 'pages/Products';
import NexusProCoin from "pages/NexusProCoin";
import Business from "pages/Business";
import Person from "pages/Person";
import Developer from "pages/Developer";
import TermsOfUse from "pages/Terms";
import PrivacyPolicy from "pages/Privacy";
import Career from "pages/Career";
import { ContactUsForm } from "components/Dialog/ContactUs";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// ✅ globally default to 30 seconds
			staleTime: 100000 * 30,
			retry: false,
			cacheTime: 1000000,
			refetchOnMount: true,
			refetchOnWindowFocus: true,
			refetchInterval: 30000, // Set to 30 seconds
		},
	},
});

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const handleResize = () => {
		if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
	};
	const [selectedPage, setSelectedPage] = useState('whynexuspro');
	const [contactOpened, setContactOpened] = useState(false)
	const notShowingHeader = ['login', 'signup'];

	const pageHistory = useMemo(() => [], []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const onBackButtonEvent = (e) => {
		e.preventDefault();
		pageHistory.pop();

		setSelectedPage(pageHistory[pageHistory.length - 1]);
		pageHistory.pop();
	}

	useEffect(() => {
		window.history.pushState(null, null, "");
		window.addEventListener('popstate', onBackButtonEvent);
		return () => {
			window.removeEventListener('popstate', onBackButtonEvent);
		};
	}, [selectedPage]);

	////////////////////////////////
	const [passed, setpassed] = useState(true);
	const [username, setusername] = useState("");
	const [pwd, setpwd] = useState("");

	////////////////////////////////

	const Page = () => {

		pageHistory.push(selectedPage)
		if (selectedPage === "whynexuspro" || selectedPage === "faqs")
			return (<WhyNexusPro setSelectedPage={setSelectedPage} isMobileMenuOpen={isMobileMenuOpen} setContactOpened={setContactOpened} section={selectedPage} />)
		switch (selectedPage) {
			case "howitworks":
				return (<HowItWorks />)
			case "news":
				return (<News />)
			case "transparency":
				return (<Transparency />)
			case "aboutus":
				return (<AboutUs />)
			case "products":
				return (<Products setSelectedPage={setSelectedPage} />)
			case "nexusprocoin":
				return (<NexusProCoin />)
			case "business":
				return (<Business setContactOpened={setContactOpened} />)
			case "person":
				return (<Person setContactOpened={setContactOpened} />)
			case "developer":
				return (<Developer setContactOpened={setContactOpened} />)
			case "terms":
				return (<TermsOfUse />)
			case "privacy":
				return (<PrivacyPolicy />)
			case "career":
				return (<Career setContactOpened={setContactOpened} />)
			default:
				return (<></>)
		}
	}

	return (
		<QueryClientProvider client={queryClient}>
			<ModeProvider>
				{passed ? (
					<div className="App dark">
						{notShowingHeader.includes(selectedPage) ? null : <Header
							setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
							isMobileMenuOpen={isMobileMenuOpen}
							setIsMobileMenuOpen={setIsMobileMenuOpen}
						/>}
						{<ContactUsForm isOpen={contactOpened} setOpen={setContactOpened} setSelectedPage={setSelectedPage}
							selectedPage={selectedPage}
							isMobileMenuOpen={isMobileMenuOpen}
							setIsMobileMenuOpen={setIsMobileMenuOpen} />}
						{!isMobileMenuOpen ? <>{Page()}{notShowingHeader.includes(selectedPage) ? null : <Footer setSelectedPage={setSelectedPage} setContactOpened={setContactOpened} />}</> : null}

					</div>
				) : (
					<div className='flex flex-col items-center justify-center w-screen h-screen gap-10'>
						<div className='flex items-center gap-4'>
							<span>UserName:</span>
							<input
								className="p-2 text-center border rounded-md w-100 border-gray_md"
								value={username}
								onChange={(e) => setusername(e.target.value)}
							/>
						</div>
						<div className='flex items-center gap-4'>
							<span>Password:</span>
							<input
								className="p-2 text-center border rounded-md w-100 border-gray_md"
								value={pwd}
								type='password'
								onChange={(e) => setpwd(e.target.value)}
							/>
						</div>
						<button className='px-10 py-5 text-white rounded-lg bg-gray_md hover:opacity-60' onClick={() => {
							if (username === "admin" && pwd === "ZD1818") {
								setpassed(true);
							} else {
								alert("Invalid Username or Password");
							}
						}} >OK</button>
					</div>
				)}
			</ModeProvider>
		</QueryClientProvider>
	);
}

export default App;
