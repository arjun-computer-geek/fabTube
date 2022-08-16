import { SuggestionVideoCardExplore } from 'components'
import { Button } from 'components/muiComponents'
import { useUser } from 'contexts/userContext'
import { useWatchLater } from 'contexts/watchaLaterContext'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const WatchLater = () => {
    const { watchLaterState: { watchLaterVideos },  removeFromWatchLater } = useWatchLater()
    const { userState: { user, token } } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    },[user])

    return (<>

        {watchLaterVideos.length <= 0 ? <div className='no-data-container'>
            <h3>You haven't added any video to watch list...</h3>
            <Button
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                href="/"
            >
                Browse
            </Button>
        </div> : <>

            <div className='history-header'>
                <h2>Videos to Watch Later ({watchLaterVideos.length})</h2>
            </div>
            <div className='history-video-container'>
                {watchLaterVideos?.map(video => <SuggestionVideoCardExplore type="dismiss" handler={removeFromWatchLater} token={token}
                    key={video?._id}
                    id={video?._id}
                    thumbnail={video?.thumbnail}
                    title={video?.title}
                    ProfilePic={video?.chanel_pic}
                    chanel={video?.creator}
                    views={video?.views}
                    createdAt={video?.createdAt} />)}

            </div>
        </>}

    </>)
}
