import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { db } from '../firebase/firebaseConfig'

function ProductCard({ item }) {

    const dispatch = useDispatch()

    let Product
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }))
        alert("Product added to the cart")
        // console.log(item);
        if (item.id !== null) {
            Product = item;
            Product['quantity'] = 1
            Product['TotalProductPrice'] = Product.quantity * Product.price
            db.collection('Cart').doc(item.id).set(Product).then(() => {
                console.log('added');
            })
        }
    }
    

    return (
        <div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
                <img src={item.imgUrl} alt="" />
            </div>
            <div class="product-details">
                <span class="product-catagory">{item.category}</span>
                <h4>
                    <Link to={{ pathname: `/product/${item.id}`, state: addToCart }}>{item.productName}</Link>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                <div class="product-bottom-details">
                    <div class="product-price"><small>$96.00</small>${item.price}</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart">Like</i></a>
                        <button href="" onClick={addToCart}><i class="fa fa-shopping-cart">Add to Cart</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard