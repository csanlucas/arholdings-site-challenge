import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from '../common/header'
import Detail from './detail'
import {API_URL, API_ENDPOINT} from '../utils/api'

const ProductInfo = (props) => {
    const [productdetail, setProductDetail] = useState()
    const {sku} = useParams()
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

    return (
        <div>
            <Header/>
            {productdetail && (
                <Detail
                    name={productdetail.name || ''}
                    description={productdetail.short_description || ''}
                    price={productdetail.regular_price || ''}
                />
            )}
        </div>
    )
}

export default ProductInfo