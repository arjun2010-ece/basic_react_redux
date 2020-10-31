import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <p>Select a song</p>
    }
    return (
        <div>
            SongDetail:
            <p className="pl-3">
                {song.title} : {song.duration}
            </p>
        </div>
    )
}

const getState = (state) => {
    return {
        song: state.selectedSong 
    }
}


export default connect(getState)(SongDetail);