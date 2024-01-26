import Search from "./Search"
import { auth } from '../firebase/firebaseConfig';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavBar({ handleSearch }) {

    const loggedInUser = localStorage.getItem("displayName")
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const navigate = useNavigate()

    const logout = async () => {
        try {
            await auth.signOut();
            localStorage.clear()
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <div className='NavBar'>
            <div >FlipKart Logo</div>
            <Search handleSearch={handleSearch} />
            <button onClick={()=>navigate('/my-cart')}>My Cart {totalQuantity}</button>
            <div>Welcome {loggedInUser}</div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar