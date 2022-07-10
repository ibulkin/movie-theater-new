import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/reducer'
import cartReducer from './cart/reducer'

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		cart: cartReducer,
	},
})
