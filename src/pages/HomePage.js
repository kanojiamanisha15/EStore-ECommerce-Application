import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import products from '../assets/data/products'

function HomePage() {

    const [data, setData] = useState(products)

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

    return (
        <div>
            <NavBar handleSearch={handleSearch} />
            <Categories handleFilter={handleFilter} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProductList data={data} />
            </div>
        </div>
    )
}

export default HomePage