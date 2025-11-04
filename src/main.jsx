import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContactOrder } from './Components/Fragments/ContactOrder'
import { Navbar } from './Components/Fragments/Navbar'
import { AboutSection } from './Components/Layouts/AboutSection'
import { HeroSection } from './Components/Layouts/HeroSection'
import { MenuSection } from './Components/Layouts/MenuSection'
import { ServiceSection } from './Components/Layouts/ServiceSection'
import { TestimonialSlider } from './Components/MyComp/TestimonialSlider'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navbar />
		<HeroSection />
		<AboutSection />
		


		<ServiceSection />
	
		<MenuSection />
			<TestimonialSlider />
		<ContactOrder />

	</React.StrictMode>
)
