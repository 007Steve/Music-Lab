import { configureStore } from '@reduxjs/toolkit'
import songsReducer from '../redux/songsSlice'
import currentSongReducer from '../redux/currentSongSlice'
export const store = configureStore({
    reducer: {
        songs: songsReducer,
        currentSong: currentSongReducer,
    },
})