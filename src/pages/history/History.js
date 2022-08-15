import { Button } from 'components/muiComponents'
import { HistoryIcon } from 'assets/muiIcons'
import { SuggestionVideoCardExplore } from 'components'
import { useHistory } from 'contexts/historyContex'
import React from 'react'
import './history.css'

export const History = () => {
    const { historyState: { historyVideos } } = useHistory()
    return (<>
        {historyVideos.length <= 0 ? <div className='no-history-container'>
            <HistoryIcon />
            <h3>Keep track of what you watch</h3>
            <p>Watch history isn't viewable when signed out.</p>
            <Button
                variant="contained"
                sx={{ mt: 2, mb: 1}}
                href="/login"
                >
                SIGN IN
            </Button>
        </div> : <>

            <div className='history-header'>
                <h2>History ({historyVideos.length})</h2>
                <Button variant="contained" className='clear-btn'>Clear History</Button>
            </div>
            <div className='history-video-container'>
                {historyVideos?.map(video => <SuggestionVideoCardExplore key={video?._id}
                    id={video?._id}
                    thumbnail={video?.thumbnail}
                    title={video?.title}
                    ProfilePic={video?.chanel_pic}
                    chanel={video?.creator}
                    views={video?.views}
                    createdAt={video?.createdAt} />)}

            </div>
        </>}
    </>
    )
}
