import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import products from '../assets/data/products'
import Sidebar from '../components/Sidebar'

const MIN = 100;
const MAX = 12000

function HomePage() {

    const [data, setData] = useState(products)
    const [values, setValues] = useState([MIN, MAX])

    // useEffect(() => {
    //     const filteredProducts = products.filter(
    //         (item) => item.category === 'chair'
    //     )
    //     setData(filteredProducts)
    // }, [])

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setData(searchProducts)
    }

    const handleFilter = (e) => {
        //optimisation=filter & map to be converted into one
        products.map((product) => {
            const filterValue = e.target.value
            if (filterValue === product.category) {
                const filterProducts = products.filter((item) => item.category === product.category)
                setData(filterProducts)
            }
        })
    }

    console.log(products[0].price);

    const handlePrice = () => {
            const filteredProducts = products.filter((item)=>values[0] <= item.price <= values[1])
        setData(filteredProducts)
        }

    return (
        <div>
            <Sidebar values={ values} setValues={setValues} handlePrice={handlePrice} MIN={MIN} MAX={MAX} />
            <div style={{ marginLeft: '25%' }}>
                <NavBar handleSearch={handleSearch} />
                <Categories handleFilter={handleFilter} />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <ProductList data={data} />
                </div>
            </div>
        </div>
    )
}

export default HomePage