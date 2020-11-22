import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { API_ENDPOINT } from '../../config'

const defaultState = {
date_created: "",
description: "",
id: 0,
img: "",
itemcount: "",
itemprice: "",
name: "",
users_id: 0,
}
 
export default function ProductDetail() {
    const [items, setItems] = useState(defaultState);
    let { id } = useParams();

    const getItem = () => {
        fetch(`${API_ENDPOINT}/items/${id}`)
            .then(res => res.json())
            .then(item => {
                console.log(item)
                setItems(item)
            })
    }

    useEffect(() => {
        getItem()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    console.log(items)



    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src="https://picsum.photos/660/442" alt="itemphoto" />
            </div>
            <div className="product-detail-item-name-container">

                <div className="product-detail-item-name">
                    <h5>
                        {items.name}
                    </h5>
                </div>

                <div className="product-detail-item-price-container">
                    <div className="product-detail-item-price tag">
                        <p>${items.itemprice}</p>
                    </div>
                    <div className="product-detail-item-availability tag">
                        <p>Available: {items.itemcount}</p>
                    </div>
                </div>
            </div>
            <div className="product-detail-item-description">
                <p>{items.description}</p>
            </div>
        </div>
    )
}