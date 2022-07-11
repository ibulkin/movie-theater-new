import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/order-item'
import './order-page.css'

export const OrderPage = () => {
	const items = useSelector(state => state.favorite.itemsInFavorite)

	if (items.length < 1) {
		return <h1>you don't have a favorite</h1>
	}

	return (
		<div className='order-page'>
			<div className='order-page__left'>
				{items.map(movie => (
					<OrderItem movie={movie} />
				))}
			</div>
			<div className='order-page__right'>
				<div className='order-page__total-price'>
					<span>{items.length} Moves</span>
				</div>
			</div>
		</div>
	)
}
