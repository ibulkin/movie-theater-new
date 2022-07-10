import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button'
import { setItemInCart, deleteItemFromCart } from '../../store/cart/reducer'
import './movie-buy.css'

export const MovieBuy = ({ movie }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)
	const isItemInCart = items.some(item => item.id === movie.id)

	const handleClick = e => {
		e.stopPropagation()
		if (isItemInCart) {
			dispatch(deleteItemFromCart(movie.id))
		} else {
			dispatch(setItemInCart(movie))
		}
	}

	return (
		<div className='movie-buy'>
			<span className='movie-buy__price'>{movie.price} </span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Remove from Favorites' : 'Add to Favorites'}
			</Button>
		</div>
	)
}
