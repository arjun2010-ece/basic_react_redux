import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions";

const SongList = (props) => {

    function renderList(){
        return props.songs.map(song => {
            return (
                <div className="d-flex my-5" key={song.title}>               
                    <div className="content mr-4">{song.title}</div>
                    <div className="mr-4">
                        <button onClick={() => props.selectSong(song)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {selectSong})(SongList);