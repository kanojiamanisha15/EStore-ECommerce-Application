import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase/firebaseConfig'

function Cart() {

    const [loading, setLoading]=useState(true)

    const {cartItems} = useSelector(state => state.cart)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    // const getCurrentUser = () => {
    //     const [user, setUser] = useState()
    //     useEffect(() => {
    //         auth.onAuthStateChanged(user => {
    //             if (user) {
    //                 console.log(user);
    //             }
    //         })
    //     })
    // }
    // const user = getCurrentUser()

    const [cartProducts, setCartProducts] = useState([])
    

    useEffect(() => {
        // auth.onAuthStateChanged(user => {
        db.collection('Cart').onSnapshot(snapshot => {
            const newCartProduct = snapshot.docs.map(doc => ({
                ID: doc.id,
                ...doc.data()
            }))
            newCartProduct && setLoading(false)
            setCartProducts(newCartProduct)
            
        })
        // })
        
    }, [])
    console.log(cartProducts);
    

    return (
        <div>
            <NavBar />
            {
                loading ? <div>Loading...</div> :
                <div className='small-container cart-page' style={{ margin: '80px auto', width: '70%' }}>
                {/* {
                    cartItems.length === 0 ? <h2>No Items added to the Cart!!</h2> :
                        <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tr>
                                <Th>Product</Th>
                                <Th>Quantity</Th>
                                <Th style={{ textAlign: 'right' }}>Subtotal</Th>
                            </tr>
                            {
                                cartItems.map((item, index) => (
                                    <Tr item={item} key={index} />
                                ))
                            }
                        </Table>
                } */}
                {
                    cartProducts.length === 0 ? <h2>No Items added to the Cart!!</h2> :
                        <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tr>
                                <Th>Product</Th>
                                <Th>Quantity</Th>
                                <Th style={{ textAlign: 'right' }}>Subtotal</Th>
                            </tr>
                            {
                                cartProducts.map((item, index) => (
                                    <Tr item={item} key={index} />
                                ))
                            }
                        </Table>
                }
                

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Table style={{ borderTop: '3px solid #ff523b', width: '100%', maxWidth: '400px' }}>
                        <tr>
                            <Td>Subtotal</Td>
                            {/* <Td style={{ textAlign: 'right' }}>${totalAmount}</Td> */}
                        </tr>
                        <tr>
                            <Td>Tax</Td>
                            {/* <Td style={{ textAlign: 'right' }}>${Math.round(totalAmount * 30 / 100)}</Td> */}
                        </tr>
                        <tr>
                            <Td>Total</Td>
                            {/* <Td style={{ textAlign: 'right' }}>${totalAmount + Math.round(totalAmount * 30 / 100)}</Td> */}
                        </tr>
                    </Table>

                </div>
                <button><Link to='../home-page'>Continue Shopping</Link></button>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
            }
            
        </div>
    )
}

const Tr = ({ item }) => {

    // const dispatch = useDispatch()
    // const deleteProduct = () => {
    //     dispatch(cartItems.deleteItem(item.id))
    // }

    return (
        <tr>
            <Td>
                <div className='cart-info' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TdImg src={item.imgUrl} />
                    <div>
                        <p>{item.productName}</p>
                        <small>${item.price}</small>
                        <br />
                        <TdA href=''>Remove</TdA>
                    </div>
                </div>
            </Td>
            <Td><TdInput type='number' value={item.quantity} /></Td>
            <Td style={{ textAlign: 'right' }}>${item.price * item.quantity}</Td>
        </tr>
    )
}

const Table = styled.table`
    width:100%;
    border-collapse:collapse
`

const Th = styled.th`
    text-align:left;
    padding:5px;
    color:#fff;
    background:#ff523b;
    font-weight:normal
`
const Td = styled.td`
    padding:10px 5px
`
const TdInput = styled.input`
    width:40px;
    height:30px;
    padding:5px
`
const TdA = styled.a`
    color:#ff523b;
    font-size:12px;
    text-decoration:none
`
const TdImg = styled.img`
    width:80px;
    height:80px;
    margin-right:10px
`

export default Cart