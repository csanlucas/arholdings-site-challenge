import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import Header from '../common/header'
import Detail from './detail'
import {API_URL, API_ENDPOINT} from '../utils/api'
import './Product.css'

const ProductInfo = (props) => {
    const [productdetail, setProductDetail] = useState()
    const {sku} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        requestProductDetail()
    }, [])
    async function requestProductDetail() {
        try{
            const response = await fetch(`${API_URL}${API_ENDPOINT.PRODUCT_DETAIL_SKU.replace('{value}', sku)}`)
            const json = await response.json()
            setProductDetail(json['results'][0])
        } catch {}
    }

    const onClickBack = () => {
        navigate('/')
    }

    return (
        <div>
            <Header/>
            <div className="Product-screen">
                <div className="Product-back-btn-wrapper">
                    <button className="Product-back-btn" onClick={onClickBack}>
                        <h3><IoIosArrowBack/> Regresar</h3>
                    </button>
                </div>
                {productdetail && (
                    <Detail
                        images={productdetail.images || ''}
                        name={productdetail.name || ''}
                        description={productdetail.short_description || ''}
                        price={Number(productdetail.regular_price).toFixed(2).toLocaleString() || ''}
                    />
                )}
            </div>
        </div>
    )
}

export default ProductInfo