import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import Header from '../common/header'
import Detail from './detail'
import {API_URL, API_ENDPOINT} from '../utils/api'
import './Product.css'

const ProductInfo = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [productdetail, setProductDetail] = useState()
    const {sku} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        requestProductDetail()
    }, [])
    async function requestProductDetail() {
        setIsLoading(true)
        try{
            const response = await fetch(`${API_URL}${API_ENDPOINT.PRODUCT_DETAIL_SKU.replace('{value}', sku)}`)
            const json = await response.json()
            if (json['results'].length > 0) {
                setProductDetail(json['results'][0])
            } else {
                setProductDetail(undefined)
            }
        } catch (error) {}
        setIsLoading(false)
    }

    const onClickBack = () => {
        navigate('/')
    }

    const getProductContent = () => {
        if (isLoading) {
            return (<p>Loading... </p>)
        } else if (productdetail) {
            return (
                <Detail
                    images={productdetail.images || ''}
                    name={productdetail.name || ''}
                    description={productdetail.short_description || ''}
                    price={Number(productdetail.regular_price).toFixed(2).toLocaleString() || ''}
                    shopify_data={productdetail.shopify_sync_data}
                />
            )
        } else {
            return <h2>Producto no encontrado</h2>
        }
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
                {getProductContent()}
            </div>
        </div>
    )
}

export default ProductInfo