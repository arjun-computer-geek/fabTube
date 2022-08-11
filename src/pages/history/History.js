import { Button } from '@mui/material'
import { SuggestionVideoCard, SuggestionVideoCardExplore } from 'components'
import React from 'react'
import './history.css'

export const History = () => {
    return (<>
        <div className='history-header'>
            <h2>History (0)</h2>
            <Button variant="contained" className='clear-btn'>Clear History</Button>
        </div>
        <div className='history-video-container'>
        <SuggestionVideoCardExplore  />
        </div>
        </>
    )
}
