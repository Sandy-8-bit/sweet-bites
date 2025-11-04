/* eslint-disable react/prop-types */
export const Button = ({ variant, children }) => {
	return (
		<button
			className={`${variant} flex items-center gap-2 font-semibold py-3 px-5 rounded-lg relative overflow-hidden transition-colors duration-500 ease-in-out active:scale-[97%] text-white-500 bg-transparent border border-white-500 group`}
		>
			<span className="relative z-10 transition-colors duration-500 group-hover:text-red-500">
				{children}
			</span>
			{/* Hover background overlay */}
			<span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg"></span>
		</button>
	)
}
