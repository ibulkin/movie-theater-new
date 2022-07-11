import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button'
import {
	setItemInFavorite,
	deleteItemFromFavorite,
} from '../../store/favorite/reducer'
import './movie-buy.css'

export const MovieBuy = ({ movie }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.favorite.itemsInFavorite)
	const isItemInFavorite = items.some(item => item.id === movie.id)

	const handleClick = e => {
		e.stopPropagation()
		if (isItemInFavorite) {
			dispatch(deleteItemFromFavorite(movie.id))
		} else {
			dispatch(setItemInFavorite(movie))
		}
	}

	return (
		<div className='movie-buy'>
			<span className='movie-buy__price'>{movie.price} </span>
			<Button
				type={isItemInFavorite ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
			</Button>
		</div>
	)
}
