import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../button'
import { FavoriteItem } from '../favorite-item'
import './favorite-menu.css'

export const FavoriteMenu = ({ onClick }) => {
	const items = useSelector(state => state.favorite.itemsInFavorite)
	return (
		<div className='favorite-menu'>
			<div className='favorite-menu__movies-list'>
				{items.length > 0
					? items.map(movie => (
							<FavoriteItem
								key={movie.image}
								image={movie.image}
								title={movie.title}
								id={movie.id}
							/>
					  ))
					: "you don't have a favorite"}
			</div>
			{items.length > 0 ? (
				<div className='favorite-menu__arrange'>
					<div className='favorite-menu__total-price'></div>
					<Button type='primary' size='m' onClick={onClick}>
						Favorites
					</Button>
				</div>
			) : null}
		</div>
	)
}
