import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase/firebaseConfig'
import { doc, deleteDoc } from "firebase/firestore";

function TableRow({ item, getData }) {
    const [quantity, setQuantity] = useState(item.quantity)

    const changeQuanity = (e) => {
        setQuantity(e.target.value)
    }

    const handleDelete = () => {
        try {
            db.collection("Cart").doc(item.id).delete().then(() => {
                console.log('deleted');
            })
        } catch (error) {
            console.log("Errror in table",error)
        }
        
        // deleteDoc(doc(db, "Cart", item.id));
        console.log(typeof item.id);
    }
    return (
        <tr>
            <Td>
                <div className='cart-info' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TdImg src={item.imgUrl} />
                    <div>
                        <p>{item.productName}</p>
                        <small>${item.price}</small>
                        <br />
                        <TdA onClick={handleDelete}>Remove</TdA>
                    </div>
                </div>
            </Td>
            <Td><TdInput type='number' value={quantity} onChange={changeQuanity} /></Td>
            <Td style={{ textAlign: 'right' }}>${item.price * quantity}</Td>
        </tr>
    )
}

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

export default TableRow