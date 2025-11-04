import { IoArrowForward } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa6'
import { Button } from '../Elements/Button'
import { SectionTitle } from '../Elements/SectionTitle'

export const AboutSection = () => {
	return (
		<section id='about' className='px-5 pt-24 lg:px-20'>
			<div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
				{/* Image Section */}
				<div className='bg-[url(../images/about-img.webp)] bg-center bg-cover rounded-2xl overflow-hidden w-full shadow-md'>
					<div className='flex h-[650px] bg-dark/40 bg-gradient-to-b from-dark'>
						<div className='self-center text-white px-10 lg:px-20'>
							<h5 className='font-serif pb-3'>Sweet Bite</h5>
							<p>
								Founded in 2020 in Gandhinagar, Dharwad by{' '}
								<span className='font-semibold'>Mrs. Supritha Tikare</span>.
								What began as a small home bakery making cakes has grown into a
								beloved brand serving a variety of homemade baked goodies. Each
								product is crafted with the same love and care as if it were
								made for our own family.
							</p>
						</div>
					</div>
				</div>

				{/* Text Section */}
				<div className='md:w-3/4'>
					<SectionTitle>About Us</SectionTitle>

					<p className='pb-5'>
						<span className='font-bold'>Sweet Bite</span> started its journey
						in 2020 at Gandhinagar, Dharwad. What began with just cakes quickly
						grew due to overwhelming customer love and support. Today, we
						create a wide range of homemade bakery delights — each made with
						quality ingredients and time-honored recipes to bring joy in every
						bite.
					</p>

					<p className='pb-5'>
						“At Sweet Bite, we're passionate about crafting homemade bakery
						products that bring joy to every bite. With a commitment to quality
						ingredients and traditional recipes, we aim to delight our
						customers with the comforting flavors of home-baked goodness.”
					</p>

					<p className='pb-5'>
						We not only prepare homemade bakery items, but also teach and
						encourage interested individuals to grow with us and pursue their
						passion for baking.
					</p>

					<p className='pb-5 italic'>
						"From our family to yours, enjoy the taste of homemade happiness."
					</p>

					{/* Contact Section */}
					<div className='pb-10 flex items-center gap-3'>
						<div className='p-3 bg-light rounded-full'>
							<FaPhone className='fill-pink w-5 h-5' />
						</div>
						<div>
							<p className='font-bold'>(+91) 98765 43210</p>
							<p>Contact Us</p>
						</div>
					</div>

				
				</div>
			</div>
		</section>
	)
}
