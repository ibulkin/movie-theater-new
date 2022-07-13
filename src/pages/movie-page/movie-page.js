import React from 'react'
import { useSelector } from 'react-redux'
import { MovieBuy } from '../../components/movie-buy'
import { MovieGenre } from '../../components/movie-genre'
import './movie-page.css'

export const MoviePage = () => {
	const movie = useSelector(state => state.movies.currentMovie)

	if (!movie) return null

	return (
		<div className='movie-page'>
			<h1 className='movie-page__title'>{movie.title}</h1>
			<div className='movie-page__content'>
				<div className='movie-page__left'>
					<iframe
						width='90%'
						height='500px'
						src={movie.video}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					></iframe>
				</div>
				<div className='movie-page__right'>
					<p>{movie.description}</p>
					<p className='secondary-text'></p>
					{movie.genres.map(genre => (
						<MovieGenre genre={genre} key={genre} />
					))}
					<div className='movie-page__buy-movie'>
						<MovieBuy movie={movie} />
					</div>
				</div>
			</div>
		</div>
	)
}
