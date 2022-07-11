import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/reducer'
import favoriteReducer from './favorite/reducer'

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		favorite: favoriteReducer,
	},
})
