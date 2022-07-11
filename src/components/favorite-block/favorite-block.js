import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import { FavoriteMenu } from '../favorite-menu'
import { ItemsInFavorite } from '../items-in-favorite'
import { calcTotalPrice } from '../utils'
import './favorite-block.css'

export const FavoriteBlock = () => {
	const [isFavoriteMenuVisible, setIsFavoriteMenuVisible] = useState(false)
	const items = useSelector(state => state.favorite.itemsInFavorite)
	const history = useHistory()
	const totalPrice = calcTotalPrice(items)
	const handleGoToOrderClick = useCallback(() => {
		setIsFavoriteMenuVisible(false)
		history.push('/order')
	}, [history])

	return (
		<div className='favorite-block'>
			<ItemsInFavorite quantity={items.length} />
			<MdFavorite
				color='red'
				size={35}
				className='favorite-icon'
				onClick={() => setIsFavoriteMenuVisible(!isFavoriteMenuVisible)}
			/>
			{totalPrice > 0 ? <span className='total-price'></span> : null}
			{isFavoriteMenuVisible && <FavoriteMenu onClick={handleGoToOrderClick} />}
		</div>
	)
}
