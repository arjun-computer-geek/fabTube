import { SuggestionVideoCardExplore } from 'components'
import { useVideos } from 'contexts/videoContex'
import React, { useEffect } from 'react'
import './explore.css'

export const ExploreDetails = ({ category }) => {
    const { categoryState: { categories, categoriesVideos }, fetchCategoriesVideo } = useVideos()
    const isCategoryExist = categories.find(item => item.categoryName === category)

    useEffect(() => {
        fetchCategoriesVideo(isCategoryExist?.categoryName)
    }, [])

    return (
        <>
            <div className='explore-details-header'>
                {isCategoryExist?.img && <div className='explore-details-img-container'>
                    <img src={isCategoryExist?.img} alt="card-img" />
                </div>}
                <h2>{isCategoryExist?.categoryName}</h2>
            </div>

            <div className='explore-videos-container'>
                <h3>{isCategoryExist?.categoryName}</h3>
                {
                    categoriesVideos?.map(({
                        _id,
                        thumbnail,
                        title,
                        chanel_pic,
                        creator,
                        views,
                        createdAt,
                    }) => (
                        <SuggestionVideoCardExplore
                            key={_id}
                            id={_id}
                            thumbnail={thumbnail}
                            title={title}
                            ProfilePic={chanel_pic}
                            chanel={creator}
                            views={views}
                            createdAt={createdAt}
                        />
                    ))
                }
            </div>
        </>
    )
}
