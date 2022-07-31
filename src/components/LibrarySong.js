import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //add Active State
    const newSongs = songs.map((itemSong)=>{
        if(itemSong.id === song.id){
            return{
                ...itemSong,
                active: true,
            }
        } else{
            return{
                ...itemSong, active:false,
            }
        }
    })
    
    setSongs(newSongs);
    audioRef.current.play();
  };
  
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected':''}`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
