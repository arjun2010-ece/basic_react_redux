actions may or may not take input but definatey returns two values:
one is type and second is payload.
On second thought payloads name can be changed and may or may not exists.

Example of action creator::
```
// Action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
}
```
Reducers are functions which builds up the global state and listens for actions by its "type".
it takes 2 args: first is state and second is action.

Example of Reducers that listen to actions::

```
const selectedSongReducer = (selectedSong = null, action) => {
   if(action.type === "SONG_SELECTED"){
       return action.payload;
   }

   return selectedSong;
}
```