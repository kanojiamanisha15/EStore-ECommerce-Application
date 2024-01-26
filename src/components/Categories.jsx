import React from 'react'
import styled from 'styled-components'
import products from '../assets/data/products'

function Categories({handleFilter}) {

    return (
        <List>
            <div>
                <select onChange={handleFilter}>
                    <option>Filter by Category</option>
                    <option value='sofa'>Sofa</option>
                    <option value='mobile'>Mobile</option>
                    <option value='chair'>Chair</option>
                    <option value='watch'>Watch</option>
                    <option value='wireless'>Wireless</option>
                </select>
            </div>
            <div>
                <select>
                    <option>Sort by</option>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
            </div>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content:space-evenly;
    margin:2rem 0rem;
    
`

export default Categories