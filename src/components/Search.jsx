import React from 'react'
import { Input } from 'antd';
import {SearchOutlined } from '@ant-design/icons'

function Search({ handleSearch }) {

    return (
        <div style={{width:'50%'}}>
            <Input addonBefore={<SearchOutlined />} placeholder="Search for Products, Brands & More" onChange={handleSearch}/>
        </div>
    )
}

export default Search