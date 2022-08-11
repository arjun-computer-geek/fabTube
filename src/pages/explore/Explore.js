import React from 'react'
import {  Sidebar, VideoCard, Loader, TextCard } from "components";
import './explore.css'
import { useVideos } from 'contexts/videoContex';

export const Explore = () => {
    const {categoryState:{categories}, fetchCategoriesVideo} = useVideos()
    return (
        <>
            <main className="container">
                <Sidebar />
                <div className="home-content">
                    <div className='explore-category'>
                        {categories?.slice(0, 8)?.map(category =><TextCard key={category._id} text={category.categoryName} img={category.img}/> )}
                    </div>
                    <button onClick={() => fetchCategoriesVideo()}>fetch</button>
                </div>
            </main>
        </>
    )
}
