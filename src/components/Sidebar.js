import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Slider, Switch } from 'antd';



function Sidebar({handlePrice}) {
     const MIN = 0;
     const MAX = 800
    const [values, setValues] = useState([0,0])

 const handleChange = (values)=>{
     setValues(values)
    
 }
 useEffect(() => {
  setValues([MIN,MAX])
 }, [])
 const handleComplete=(value)=>{
     handlePrice(value)
 }
    return (
        <>
            <SideSection className='sidebar' style={{ fontSize: '22px', fontWeight: 'normal', marginBottom: '20px' }}>
                <Logo className='logo-container'>Cart-logo</Logo>
                <div className='category'>
                    <h2 className='sidebar-title'>Category</h2>
                    <div>
                        <CategoryLabel className='sidebar-label-container'>
                            <input type='radio' name='test' />
                            <span className='checkmark'></span>Sofa
                        </CategoryLabel>
                        <CategoryLabel className='sidebar-label-container'>
                            <input type='radio' name='test' />
                            <span className='checkmark'></span>Mobile
                        </CategoryLabel>
                        <CategoryLabel className='sidebar-label-container'>
                            <input type='radio' name='test' />
                            <span className='checkmark'></span>Chair
                        </CategoryLabel>
                        <CategoryLabel className='sidebar-label-container'>
                            <input type='radio' name='test' />
                            <span className='checkmark'></span>Watch
                        </CategoryLabel>
                        <CategoryLabel className='sidebar-label-container'>
                            <input type='radio' name='test' />
                            <span className='checkmark'></span>Wireless
                        </CategoryLabel>
                    </div>
                </div>
                <div className='price'>
                    <h3>Price<span>Range</span></h3>
                    <div>
                        <SliderSpan className='value'>${values[0]}</SliderSpan> - <SliderSpan className={'value'}>${values[1]}</SliderSpan>
                    </div>
                    <Small>
                        Current Range: ${values[0]} - ${values[1]}
                    </Small>
                    <Slider range value={values} onChange={(e)=> handleChange(e)} onChangeComplete={(e) =>  handleComplete(e)} min={MIN} max={MAX}/>
                </div>
                <div className='sorting'>Sorting</div>
            </SideSection>
        </>
    )
}

const SideSection = styled.div`
    width:25%;
    position:fixed;
    height:100%;
    border-right:2px solid #e5e5e5;
    z-index:3;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-x:hidden;
`
const Logo = styled.div`
    margin-bottom:4rem;
    margin-top:1.3rem
`
const CategoryLabel = styled.label`
    display:block;
    position:relative;
    padding-left:35px;
    margin-bottom:12px;
    cursor:pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`
// const CategoryInput = styled.input`
//     position:absolute;
//     opacity:0;
//     cursor:pointer;
//     &:checked {
//         background-color: blue;
//     }
// `
// const CategorySpan = styled.span`
//     position:absolute;
//     top:0;
//     left:0;
//     height:20px;
//     width:20px;
//     background-color:#eee;
//     border-radius:50%
// `

const SliderSpan = styled.span`
    margin:0;
    color:blue
`
const Small = styled.small`
    font-size:14px;
    margin-top:8px;
    display:block;
    color:#99a3bx
`

export default Sidebar