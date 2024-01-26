import { createSlice } from '@reduxjs/toolkit'
import { db } from '../../firebase/firebaseConfig';

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading:true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getItem: (state, action) => {
            db.collection('Cart').onSnapshot(snapshot => {
                const newCartProduct = snapshot.docs.map(doc => ({
                    ID: doc.id,
                    ...doc.data()
                }))     
                console.log('monu', newCartProduct);
                state.cartItems.push(newCartProduct)
                
                // state.loading = false
            })
            // }) 
            
        },
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id)

            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0)

            // console.log(state.totalQuantity);
            // console.log(state.cartItems);
            // console.log(newItem);
        },
        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),0
            )
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer