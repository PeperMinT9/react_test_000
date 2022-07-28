import React, { useState } from 'react'


const List = () => {
  const [songName, setSongName] = useState('')
  const [songs, addSong] = useState([])

  return (
    <>
      <input type='text' id='songNameInput' 
        value={ songName }
        onChange={ (e) => setSongName(e.currentTarget.value) } />
      <input type='button' value='add song'
        onClick={ () => addSong([...songs, songName]) }/>
    
      <ul> { 
          songs.map((song, index) => 
            <li key={ index }>{ song }</li>) 
        }
      </ul>
    </>
  )
}

export default List