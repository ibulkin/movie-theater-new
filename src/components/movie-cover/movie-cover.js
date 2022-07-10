import React from 'react'
import './movie-cover.css'

export const MovieCover = ({ image = '' }) => {
	return (
		<div className='movie-cover' style={{ backgroundImage: `url(${image})` }} />
	)
}
