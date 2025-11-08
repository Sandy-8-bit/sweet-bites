import { Button } from '../Elements/Button'
import { usePopupStore } from '../../store/popupstore'

export const ContactOrder = () => {
  const { openPopup } = usePopupStore()

  return (
    <>
      {/* Footer Section */}
      <div id='contact' className="flex flex-col lg:flex-row items-center justify-between w-full px-5 pb-4 text-sm lg:px-20 text-center lg:text-left gap-6 bg-red-600 text-white pt-6  shadow-md">

        {/* Left Section - Business Info */}
        <div>
          <div className="flex gap-2 items-center justify-center lg:justify-start">
            <img className="w-4 h-4" src="logo.png" alt="Sweet Bite Logo" />
            <p className="font-serif tracking-wider text-white">Sweet Bite.</p>
          </div>
          <p className="mt-2 text-xs leading-relaxed">
            Supritha Tikare <br />
            CITB Plot No 59, <br />
            Near Bandemma Temple, <br />
            Gandhinagar, Dharwad - 580004 <br />
            📞 <a href="tel:+919876543210" className="underline hover:text-gray-200">+91 8431854288</a>
          </p>

          {/* Clickable Map Link */}
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=Sweet Bite CITB PLOT No 59, near BANDEMMA TEMPLE, Gandhinagar, Dharwad, Karnataka 580004",
                "_blank"
              )
            }
            className="mt-2 flex items-center gap-1 text-xs text-white underline hover:text-gray-200 mx-auto lg:mx-0"
          >
            📍 View on Google Maps
          </button>
        </div>

        {/* Right Section - Review QR */}
    {/* Right Section - Review QR */}
<div className="flex flex-col items-center justify-center">
  <p className="text-xs font-semibold mb-2">Scan to Review Us!</p>
  
  <a
    href="https://share.google/J86t1kYEpzlbM2jE6"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-300 rounded-md"
  >
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://share.google/J86t1kYEpzlbM2jE6"
      alt="Google Review QR Code"
      className="w-20 h-20 border border-white rounded-md shadow-md bg-white"
    />
  </a>
</div>

         <p className="text-xs text-center te mt-4 text-white">
        © 2025 | Developed by Eight-Bit Technologies.
      </p>
      </div>

     
    </>
  )
}
