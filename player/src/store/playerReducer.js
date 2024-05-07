import {createSlice} from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        isPlaying: false, 
        isStopped: true, 
        track: {
            duration: 0,
            _id: "", 
            url: "", 
            id3: {
                title: "",
                artist: ""
            }
        },
        playlist: {
            _id: "", 
            name: "", 
            tracks:[]
        },
        playlistIndex: 0, 
        currentTime: 0, 
        volume: 0
    },
    reducers: {
        play(state, action){
            const {url, index} = action.payload 
            state.track = state.playlist.tracks[index]
            if(url && url !== audio.src){
                state.playlist.tracks[index].url = url 
                audio.src = url
            }
            audio.play()
            state.isPlaying = true
            state.isStopped = false
            state.playlistIndex = index
        },
        pause(state){
            state.isPlaying = false
            state.isStopped = true
            audio.pause()
        },
        stop(state){
            state.isPlaying = false
            state.isStopped = true 
            state.currentTime = 0
            audio.currentTime = 0
            audio.pause()
        },
        setDuration(state, action){
            const {duration, _id} = action.payload
            state.track.duration = duration
            state.playlist.tracks.forEach(track=>{
                if(track._id === _id){
                    track.duration = duration
                }
            })
        },
        nextTrack(state){   
            if(state.playlist.tracks.length > 0){
                const newIndex = (state.playlistIndex === state.playlist.tracks.length - 1) ? 0 : (state.playlistIndex + 1)
                state.playlistIndex = newIndex
                const newTrack = state.playlist.tracks[newIndex]
                if(newTrack.url){
                    audio.src = address + newTrack.url
                    state.track = newTrack
                }
                audio.play()
            }
        },
        prevTrack(state){
            if(state.playlist.tracks.length > 0){
                const newIndex = (state.playlistIndex === 0) ? (state.playlist.tracks.length - 1) : (state.playlistIndex - 1)
                state.playlistIndex = newIndex 
                const newTrack = state.playlist.tracks[newIndex]
                if(newTrack.url){
                    audio.src = address + newTrack.url  
                    state.track = newTrack
                }
                audio.play()
            }
        },
        setPlaylist(state, action){
            const {_id, tracks} = action.payload
            state.playlist._id = _id
            state.playlist.tracks = tracks
        },
        setCurrentTime(state, action){
            const newCurrentTime = action.payload
            if(newCurrentTime !== audio.currentTime){
                audio.currentTime = newCurrentTime
            }
            state.currentTime = audio.currentTime
        }, 
        setVolume(state, action){
            const newVolume = action.payload
            state.volume = newVolume
            audio.volume = newVolume
        }
    }
})
export default playerSlice;