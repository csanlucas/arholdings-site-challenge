import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchSku = () => {
    const [sku, updateSku] = useState("")
    const navigate = useNavigate()
    const onClickSearch = () => {
        if (sku) {
            navigate(`/detail/${sku}`)
        }
    }
    return (
        <div>
            <h3>Consulta de artículos</h3>
            <h4>Inserte el SKU que desea consultar</h4>
            <input
                id="searh-sku"
                value={sku}
                placeholder="SKU"
                onChange={(e) => updateSku(e.target.value)}
            />
            <button onClick={onClickSearch}>Search</button>
        </div>
    )
}

export default SearchSku
