import { IoArrowForward } from 'react-icons/io5'
import { SectionTitle } from '../Elements/SectionTitle'
import { CardMenu } from '../Fragments/CardMenu'
import CircularGallery from '../MyComp/CircularGallery'

let menus = [
  {
    id: 1,
    name: 'Cake',
    image: 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-coffee-cake-cafe-1-1100x733.jpg',
    stars: 4.7,
    description: `Indulge in our freshly baked cakes — moist, rich, and perfect for any celebration.`,
    price: 450
  },
  {
    id: 2,
    name: 'Cupcakes',
    image: 'https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg',
    stars: 4.6,
    description: `Delightful mini cakes topped with creamy frosting — the perfect sweet treat for all ages.`,
    price: 120
  },
  {
    id: 3,
    name: 'Muffins',
    image: 'https://images.pexels.com/photos/268310/pexels-photo-268310.jpeg',
    stars: 4.5,
    description: `Fluffy muffins packed with flavour — ideal for a morning coffee or afternoon snack.`,
    price: 90
  },
  {
    id: 4,
    name: 'Brownies',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    stars: 4.8,
    description: `Decadent chocolate brownies with a gooey centre — pure indulgence for chocolate lovers.`,
    price: 150
  },
  {
    id: 5,
    name: 'Chocolates',
    image: 'https://images.pexels.com/photos/933097/pexels-photo-933097.jpeg',
    stars: 4.4,
    description: `Hand-crafted assorted chocolates — a luxe treat for yourself or to gift.`,
    price: 200
  },
  {
    id: 6,
    name: 'Healthy Cookies',
    image: 'https://images.pexels.com/photos/302893/pexels-photo-302893.jpeg',
    stars: 4.3,
    description: `Wholesome cookies made with healthier ingredients — guilt-free and delicious.`,
    price: 110
  },
  {
    id: 7,
    name: 'Donuts',
    image: 'https://images.pexels.com/photos/37312/pexels-photo.jpg',
    stars: 4.2,
    description: `Soft ring donuts with glazed or filled options — classic comfort in every bite.`,
    price: 80
  },
  {
    id: 8,
    name: 'Teatime Cake & Chocolate Bouquet',
    image: 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-cake-book-tea-1-1100x733.jpg',
    stars: 4.5,
    description: `Enjoy a slice of teatime cake with a curated chocolate bouquet — perfect for sharing or gifting.`,
    price: 300
  }
];


export let MenuSection = () => {
	return (
		<section id='menu' className='px-5 pt-24 whitespace-nowrap lg:px-20'>
			<div className='flex items-center justify-between'>
				<SectionTitle>Our Menu </SectionTitle>
				<a
					href='#menu'
					className='self-start font-semibold pt-1 flex items-center gap-2 group'>
					All Menu
					<IoArrowForward className='h-5 w-5 group-hover:translate-x-1 transition-all' />
				</a>
			</div>

		<div style={{ height: '600px', position: 'relative' }}>
		  <CircularGallery bend={3} textColor="#FF0000" borderRadius={0.05} scrollEase={0.02}/>
		</div>
		</section>
	)
}
