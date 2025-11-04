import { SectionTitle } from '../Elements/SectionTitle'
import { CardService } from '../Fragments/CardService'

const services = [
	{
		id: 1,
		title: 'Quality Homemade Menu',
		description: `Every item we bake is crafted with love, ensuring freshness and top-notch quality in every bite.`
	},
	{
		id: 2,
		title: 'Online Orders & Delivery',
		description: `Place your orders online and we’ll deliver your favorite homemade treats right to your doorstep.`
	},
	{
		id: 3,
		title: 'Learn & Grow With Us',
		description: `We not only bake but also teach baking to passionate individuals who wish to grow with Sweet Bite.`
	}
]


export const ServiceSection = () => {
	return (
		<section id='services' className='px-5 pt-24 lg:px-20'>
			<SectionTitle>Services</SectionTitle>

			<div className='flex gap-3 flex-col md:flex-row'>
				{services.map((service) => (
					<CardService
						key={service.id}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</section>
	)
}
