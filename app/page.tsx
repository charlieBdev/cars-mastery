import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchModels } from '@/utils';
import { useEffect, useState } from 'react';

export default async function Home() {
	// const [cars, setCars] = useState(null);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const models = await fetchModels('Toyota');
	// 			setCars(models);
	// 			console.log(models);
	// 		} catch (err) {}
	// 	};
	// 	fetchData();
	// }, []);

	const allCars = await fetchModels('Toyota');
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>

				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<CustomFilter title='fuel' />
						<CustomFilter title='year' />
					</div>
				</div>

				<div>
					{!isDataEmpty ? (
						<section>
							<div className='home__cars-wrapper'></div>
							{allCars?.map((car) => (
								<CarCard car={car} />
							))}
						</section>
					) : (
						<div className='home__error-container'>
							<h2 className='text-black text-xl font-bold'>Oops, no results</h2>
							<p>{allCars?.message}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
