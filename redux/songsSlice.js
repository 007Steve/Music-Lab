import { createSlice } from '@reduxjs/toolkit'

export const songsSlice = createSlice({
    name: "SongZ",
    initialState: {
        songs: [],
    },
    reducers: {
        getSongs: (state, action) => {
            state.songs = action.payload
        }
    },
})
export const { getSongs } = songsSlice.actions
export const selectSongs = state => state.songs.songs
export const selectCount = state => state.songs;
export default songsSlice.reducer
