import React from 'react'
import './items-in-favorite.css'

export const ItemsInFavorite = ({ quantity = 0 }) => {
	return quantity > 0 ? (
		<div className='items-in-favorite'>{quantity}</div>
	) : null
}
