import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromFavorite } from '../../store/favorite/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './favorite-item.css'

export const FavoriteItem = ({ title, price, id }) => {
	const dispatch = useDispatch()

	const handleDeleteClick = () => {
		dispatch(deleteItemFromFavorite(id))
	}

	return (
		<div className='favorite-item'>
			<span>{title} </span>
			<div className='favorite-item__price'>
				<AiOutlineCloseCircle
					size={15}
					className='favorite-item__delete-icon'
					onClick={handleDeleteClick}
				/>
			</div>
		</div>
	)
}
