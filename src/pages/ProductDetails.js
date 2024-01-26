import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { useState } from 'react'
import products from '../assets/data/products'
import styled from 'styled-components'
import '../App.css';

function ProductDetails({ state }) {
    
    const { id } = useParams()
    const product = products.find((item) => item.id === id)
    const { imgUrl, productName, price, avgRating, reviews, shortDesc, description } = product
    
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            productName,
            price,
            imgUrl:imgUrl
        }))
        alert("Product added to the cart")
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const [activeTab, setActiveTab] = useState('description')

    return (
        <div>
            <NavBar />
            <section>
                <div style={{ marginBottom: '15px', maxWidth: '100%', background: 'white', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%', padding: '30px' }}>
                        <div className='image' style={{ width: 'auto', height: 'auto' }}>
                            <Image src={imgUrl} />
                        </div>
                    </div>
                    <div style={{ width: '50%', padding: '50px 100px 50px 50px' }}>
                        <h3 style={{ color: '#af827d', margin: '20px 0 20px 0', fontSize: '25px' }}>{productName}</h3>
                        <a>{avgRating} ratings (stars image)</a>
                        <h4 style={{ color: 'red' }}><small style={{ color: '#837d7c' }}>$</small>{price}</h4>
                        <p style={{ color: '#837d7c', margin: '20px 0 20px 0', lineHeight: '25px' }}>{shortDesc}</p>
                        <div className='add flex1' style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
                            <Span >-</Span>
                            <label style={{ padding: '0 20px 0 20px', color: '#c1908b', textAlign: 'center', width: '25px', height: '25px', borderRadius: '50px', margin: '20px 10px 20px 0', border: '1px solid #c1908b' }}>1</label>
                            <Span >+</Span>
                        </div>
                        <Button onClick={addToCart}>Add to Cart</Button>

                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
                        <button onClick={() => setActiveTab('reviews')}>Reviews ({reviews.length})</button>
                        {activeTab === 'description' && (
                            <p>{description}</p>
                        )
                        }
                        {activeTab === 'reviews' && (
                            reviews.map((review) => {
                                return (
                                    <ul>{review.text}</ul>
                                )
                            }
                            )
                        )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

const Span = styled.span`
    width:25px;
    height:25px;
    border-radius:50%;
    margin:20px 10px 20px 0;
    border:1px solid #c1908b;
    color:#c1908b;
    text-align:center;
    line-height:25px
`

const Button = styled.button`
    width:30%;
    padding: 10px;
    border:none;
    outline:none;
    background:#c1908b;
    color:white;
    border-radius:30px
`

const Image = styled.img`
    width:-webkit-fill-available
`

export default ProductDetails