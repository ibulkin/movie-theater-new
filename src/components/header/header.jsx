import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBlock } from '../favorite-block'
import './header.css'

export const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<Link to='/' className='header__store-title'>
					Movie Theater
				</Link>
			</div>
			<div className='wrapper header__favorite-btn-wrapper'>
				<FavoriteBlock />
			</div>
		</div>
	)
}
