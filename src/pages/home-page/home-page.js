import React from 'react'
import { MovieItem } from '../../components/movie-item'
import './home-page.css'

const GAMES = [
	{
		id: '001',
		category: 'movie',
		title: 'Pulp Fiction',
		year: '1994',
		genres: ['Thriller', 'Crime'],
		description:
			"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
		image: '/public/movie-covers/pul_fiction_1.jpg',
		video: 'https://www.youtube.com/embed/tGpTpVyI_OQ',
	},
	{
		id: '002',
		category: 'movie',
		title: 'Once Upon a Time in America',
		year: '1984',
		genres: ['Drama', 'Crime'],
		description:
			'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life',
		image: '/public/movie-covers/once_upon_a_time_in_america.jpg',
		video: 'https://www.youtube.com/embed/_gdEuuxW-zk',
	},
	{
		id: '003',
		category: 'movie',
		title: 'Some Like It Hot',
		year: '1959',
		genres: ['Comedy', 'Music', 'Romance', 'Crime'],
		description:
			'Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.',
		image: '/public/movie-covers/some_like-it_hot.jpg',
		video: 'https://www.youtube.com/embed/97TYs2YXbJw',
	},
	{
		id: '004',
		category: 'movie',
		title: 'Reservoir Dogs',
		year: '1992',
		genres: ['Thriller', 'Crime'],
		description:
			'A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie - unravel.',
		image: '/public/movie-covers/reservoir_dogs.jpg',
		video: 'https://www.youtube.com/embed/GLPJSmUHZvU',
	},
	{
		id: '005',
		category: 'movie',
		title: 'Inglourious Basterds',
		year: '1994',
		genres: ['Drama', 'Action', 'Thriller', 'War'],
		description:
			'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as The Basterds are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
		image: '/public/movie-covers/inglourious_basterds.jpg',
		video: 'https://www.youtube.com/embed/sE8hc4gVyGo',
	},
	{
		id: '006',
		category: 'movie',
		title: 'The Godfather',
		year: '1972',
		genres: ['Drama', 'Crime'],
		description:
			'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
		image: '/public/movie-covers/the_godfather.jpg',
		video: 'https://www.youtube.com/embed/Ew9ngL1GZvs',
	},
	{
		id: '007',
		category: 'movie',
		title: 'Léon: The Professional',
		year: '1994',
		genres: ['Crime', 'Drama', 'Action'],
		description:
			"Léon, the top hit man in New York, has earned a rep as an effective 'cleaner'. But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
		image: '/public/movie-covers/the_professional.jpg',
		video: 'https://www.youtube.com/embed/aNQqoExfQsg',
	},
	{
		id: '008',
		category: 'movie',
		title: 'GoodFellas',
		year: '1994',
		genres: ['Drama', 'Crime'],
		description:
			'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
		image: '/public/movie-covers/good_fellas.jpg.jpg',
		video: 'https://www.youtube.com/embed/2ilzidi_J8Q',
	},
]
export const HomePage = () => {
	return (
		<div className='home-page'>
			{GAMES.map(movie => (
				<MovieItem movie={movie} key={movie.id} />
			))}
		</div>
	)
}
