import React from 'react'
import { Link } from 'react-router-dom'
import './textCard.css'
export const TextCard = ({ text, img }) => {
    return (
        <Link className='text-card' to={`/${text}`}>
            {img && <div className='text-card-img-container'>
                <img src={img} alt="card-img" />
            </div>}
            <span className='text-card-text'>{text}</span>
        </Link>
    )
}
