import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MovieGenre } from '../movie-genre'
import { MovieBuy } from '../movie-buy/movie-buy'
import { MovieCover } from '../movie-cover/movie-cover'
import { setCurrentMovie } from '../../store/movies/reducer'
import './movie-item.css'

export const MovieItem = ({ movie }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(setCurrentMovie(movie))
		history.push(`/app/${movie.title}`)
	}

	return (
		<div className='movie-item' onClick={handleClick}>
			<MovieCover image={movie.image} />
			<div className='movie-item__details'>
				<span className='movie-item__title'>{movie.title}</span>
				<div className='movie-item__genre'>
					{movie.genres.map(genre => (
						<MovieGenre genre={genre} key={genre} />
					))}
				</div>
				<div className='movie-item__buy'>
					<MovieBuy movie={movie} />
				</div>
			</div>
		</div>
	)
}
