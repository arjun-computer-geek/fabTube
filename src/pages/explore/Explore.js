import React, { useEffect } from 'react'
import { Sidebar, VideoCard, Loader, TextCard, SuggestionVideoCard, SuggestionVideoCardExplore } from "components";
import './explore.css'
import { useVideos } from 'contexts/videoContex';

export const Explore = () => {
    const { categoryState: { categories, categoriesVideos }, fetchCategoriesVideo } = useVideos()
    console.log(categoriesVideos)
useEffect(() => {
    fetchCategoriesVideo()
},[])
    return (
        <>
            <main className="container">
                <Sidebar />
                <div className="home-content">
                    <div className='explore-category'>
                        {categories?.slice(0, 8)?.map(category => <TextCard key={category._id} text={category.categoryName} img={category.img} />)}
                    </div>

                    <div className='explore-videos-container'>
                        <h3>Trending Videos</h3>
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

                </div>
            </main>
        </>
    )
}
