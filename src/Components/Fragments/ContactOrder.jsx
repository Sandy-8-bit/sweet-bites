import { Button } from '../Elements/Button'
import { usePopupStore } from '../../store/popupstore'

export const ContactOrder = () => {
	const { openPopup } = usePopupStore()

	return (
		<>
			<div id='contact' className='px-5 pt-20 pb-10 text-center lg:px-20'>
				<div className='rounded-3xl shadow-md overflow-hidden bg-[url(../images/order-img.webp)] bg-center bg-cover'>
					<div className='text-white py-14 bg-dark/70'>
						<p>CONTACT US FOR</p>
						<h4 className='font-serif font-semibold tracking-wider pb-1'>
							Online Orders & Delivery
						</h4>
						<p className='pb-5'>(+91) 98765 43210</p>

					<Button
  onClick={() =>
    window.open(
      "https://wa.me/918431854288?text=Hi!%20I%20would%20like%20to%20place%20an%20order.",
      "_blank"
    )
  }
  variant="bg-transparent border-2 border-white text-white mx-auto active:scale-100 active:text-dark active:bg-white"
>
  Order Now!
</Button>

					</div>
				</div>
			</div>

			{/* Footer Section */}
			<div className='flex flex-col lg:flex-row items-center justify-between w-full px-5 pb-4 text-sm lg:px-20 text-center lg:text-left gap-3'>
				<div>
					<div className='flex gap-2 items-center justify-center lg:justify-start'>
						<img className='w-4 h-4' src='logo.png' alt='Sweet Bite Logo' />
						<p className='font-serif tracking-wider'>Sweet Bite.</p>
					</div>
					<p className='mt-2 text-xs leading-relaxed text-gray-700'>
						Supritha Tikare <br />
						CITB Plot No 59, <br />
						Near Bandemma Temple, <br />
						Gandhinagar, Dharwad - 580004
					</p>
				</div>

				<p className='text-xs text-gray-600'>
					© 2025 | Developed by Eight-Bit Technologies.
				</p>
			</div>
		</>
	)
}
