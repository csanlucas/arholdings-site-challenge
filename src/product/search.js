import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

import './Main.css'
import logo from '../common/ar-logo-white.png'

const SearchSku = () => {
    const [sku, updateSku] = useState("")
    const navigate = useNavigate()
    const onClickSearch = () => {
        if (sku) {
            navigate(`/detail/${sku}`)
        }
    }
    return (
        <div className="Search-screen">
            <img src={logo} alt="ar-logo" className="Search-arlogo"/>
            <h3>Consulta de artículos</h3>
            <h4>Inserte el SKU que desea consultar</h4>
            <input
                className="Search-input"
                id="searh-sku"
                value={sku}
                placeholder="SKU"
                onChange={(e) => updateSku(e.target.value)}
            />
            <button
                className="Search-btn"
                onClick={onClickSearch}
            >
                <FaSearch fill="dimgray" fontSize="bolder" size={16} style={{marginRight: '6px'}}/>
                Buscar
            </button>
        </div>
    )
}

export default SearchSku
