import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBlock } from '../favorite-block'

import './header.css'

export const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<div
					style={{
						backgroundImage: `url(${'/movie-covers/logo.svg'})`,
						height: '60px',
						width: '66px',
					}}
				/>
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
