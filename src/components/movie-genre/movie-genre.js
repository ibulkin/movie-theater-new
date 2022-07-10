import React from 'react'
import './movie-genre.css'

export const MovieGenre = ({ genre = '' }) => {
	return <span className='movie-genre'>{genre}</span>
}
