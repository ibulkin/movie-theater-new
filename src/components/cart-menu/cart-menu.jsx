import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../button'
import { CartItem } from '../cart-item'
import './cart-menu.css'

export const CartMenu = ({ onClick }) => {
	const items = useSelector(state => state.cart.itemsInCart)
	return (
		<div className='cart-menu'>
			<div className='cart-menu__movies-list'>
				{items.length > 0
					? items.map(movie => (
							<CartItem
								key={movie.image}
								image={movie.image}
								price={movie.price}
								title={movie.title}
								id={movie.id}
							/>
					  ))
					: 'Корзина пуста'}
			</div>
			{items.length > 0 ? (
				<div className='cart-menu__arrange'>
					<div className='cart-menu__total-price'>
					</div>
					<Button type='primary' size='m' onClick={onClick}>
						Favorites
					</Button>
				</div>
			) : null}
		</div>
	)
}
