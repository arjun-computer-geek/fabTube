import { Button } from '@mui/material'
import { TextCard } from 'components'
import LibraryModal from 'components/modal/LibraryModal'
import { useLibrary } from 'contexts/LibraryContext'
import React from 'react'
import './library.css'

export const Library = () => {
  const { handleClickModalOpen, libraryState: { playlists } } = useLibrary()
  console.log(playlists)
  return (
    <>
    <LibraryModal/>
      {/* <div className='no-data-container'>
        <h3>You haven't playlist...</h3>
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 1 }}
          href="/"
        >
          Browse
        </Button>
      </div> */}

      <div className='library-container'>
        <div className='library-header-container'>
          <div>
            <h1>All Playlist</h1>
            <Button variant="contained" onClick={handleClickModalOpen}>Create</Button>
          </div>
          <div>
            {
              playlists?.map(list => <TextCard key={list._id} text={list.title} />
              )
            }
          </div>
        </div>
        <div className='library-videos-container'>

        </div>
      </div>
    </>
  )
}
