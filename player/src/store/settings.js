import playerSlice from "./playerReducer";
import store from "./reducers";

audio.ontimeupdate = () => store.dispatch(playerSlice.actions.setCurrentTime(audio.currentTime))
audio.onloadedmetadata = () => store.dispatch(playerSlice.actions.setDuration({duration: audio.duration, _id: store.getState().player.track._id}))
audio.onended = () => store.dispatch(playerSlice.actions.nextTrack({index: store.getState().player.playlistIndex}))