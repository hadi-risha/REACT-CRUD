import { useState } from 'react'
import { connect } from 'react-redux'
import store from '../store'

const slice = ({prod}) => {
    const [product, setProduct ] = useState('');
    
    connect.store(
        setProduct({...product, prod})
    )

    connect.store(
        setProduct() 
    )
}