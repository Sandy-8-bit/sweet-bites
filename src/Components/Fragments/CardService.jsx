/* eslint-disable react/prop-types */
import { Services } from '../Elements/Services'

export const CardService = ({ title, description }) => {
	return (
		<div className="bg-light rounded-2xl group transition-all duration-300 lg:hover:-rotate-6">
			<div
				className="flex h-full w-full flex-col justify-between 
				p-10 text-white border text-center rounded-2xl 
				bg-gradient-to-br from-red-500 to-red-600 
				transition-all duration-300 
				lg:group-hover:rotate-6 lg:group-hover:shadow-2xl 
				lg:group-hover:scale-[1.03] 
				shadow-[0_0_20px_rgba(220,38,38,0.25)]"
			>
				<Services title={title} description={description} />
			</div>
		</div>
	)
}
