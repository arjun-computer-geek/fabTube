import { SuggestionVideoCardExplore } from 'components'
import { Button } from 'components/muiComponents'
import { useLike } from 'contexts/LikeContext'
import { useUser } from 'contexts/userContext'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Like = () => {
    const { likeState: { likeVideos }, deleteLikedVideo } = useLike()
    const { userState: { user, token } } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    },[user])

    return (<>

        {likeVideos.length <= 0 ? <div className='no-data-container'>
            <h3>You haven't liked any video...</h3>
            <Button
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                href="/"
            >
                Browse
            </Button>
        </div> : <>

            <div className='history-header'>
                <h2>Liked Videos ({likeVideos.length})</h2>
            </div>
            <div className='history-video-container'>
                {likeVideos?.map(video => <SuggestionVideoCardExplore type="dismiss" handler={deleteLikedVideo} token={token}
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
