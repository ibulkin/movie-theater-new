import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MovieCover } from '../movie-cover/movie-cover'
import './order-item.css'
import { deleteItemFromFavorite } from '../../store/favorite/reducer'

export const OrderItem = ({ movie }) => {
	const dispatch = useDispatch()
	const handleDeleteClick = () => {
		dispatch(deleteItemFromFavorite(movie.id))
	}
	return (
		<div className='order-item'>
			<div className='order-item__cover'>
				<MovieCover image={movie.image} />
			</div>
			<div className='order-item__title'>
				<span> {movie.title} </span>
			</div>
			<div className='order-item__price'>
				<AiOutlineCloseCircle
					size={25}
					className='favorite-item__delete-icon'
					onClick={handleDeleteClick}
				/>
			</div>
		</div>
	)
}
