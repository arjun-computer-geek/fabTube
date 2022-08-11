import { Explore, ExploreDetails, History } from 'pages'
import React from 'react'
import { useParams } from 'react-router-dom'

export const ConditionalPageRenderer = () => {
    const { url } = useParams()

    if (url === "explore") {
        return (
            <Explore />
        )
    }
    if(url === "history"){
        return(
            <History />
        )
    }
    if(url === "Trending" || url === "Music" || url === "Movies" || url === "Gaming" || url === "News" || url === "Sports" || url === "Learning"|| url === "Fashion & Beauty"){
        return(
            <ExploreDetails category={url}/>
        )
    }
}
