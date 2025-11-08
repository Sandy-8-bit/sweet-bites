import { Button } from '../Elements/Button'
import { usePopupStore } from '../../store/popupstore'

export const ContactOrder = () => {
	const { openPopup } = usePopupStore()

	return (
		<>
	{/* Footer Section */}
<div className='flex flex-col lg:flex-row items-center justify-between w-full px-5 pb-4 text-sm lg:px-20 text-center lg:text-left gap-6'>

  {/* Left Section - Business Info */}
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

    {/* Clickable Map Link */}
    <button
      onClick={() =>
        window.open(
          "https://www.google.com/maps?q=Sweet Bite CITB PLOT No 59, near BANDEMMA TEMPLE, Gandhinagar, Dharwad, Karnataka 580004",
          "_blank"
        )
      }
      className="mt-2 flex items-center gap-1 text-xs text-blue-600 hover:underline mx-auto lg:mx-0"
    >
      📍 View on Google Maps
    </button>
  </div>

  {/* Right Section - Review QR */}
  <div className='flex flex-col items-center justify-center'>
    <p className='text-xs font-semibold mb-2 text-gray-700'>Scan to Review Us!</p>
    <img
      src='https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://share.google/J86t1kYEpzlbM2jE6'
      alt='Google Review QR Code'
      className='w-20 h-20 border rounded-md shadow-sm'
    />
  </div>
</div>

<p className='text-xs text-gray-600 text-center mt-4'>
  © 2025 | Developed by Eight-Bit Technologies.
</p>

		</>
	)
}
