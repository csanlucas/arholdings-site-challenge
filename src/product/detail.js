import './Product.css'

const Detail = (props) => {
    const getProductsImages = () => {
        if (props.images) {
            const displayImages = props.images.split(',')
            const auxImages = displayImages.length > 1 && displayImages.slice(1) || []
            return (
                <div className="Product-images">
                    <img src={displayImages[0]} alt="ar-detail" className="Product-images-main"/>
                    <div className="Product-images-alts-wrapper">
                        {auxImages.map((item, index) => (<img key={`pi-${index}`} src={item} alt="ar-detail" className="Product-images-alts"/>))}
                    </div>
                </div>
            )
        }
        return null
    }
    const dotColors = ['#0c0c0c', '#bbb', '#da6c2c']
    return (
        <div >
            <div className="Product-container">
                {getProductsImages()}
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h4>$ {props.price}</h4>
                    <h3>Colores</h3>
                    {dotColors.map((color, index) => (
                        <span
                            class="Product-color-dot" style={{backgroundColor: color}}
                            key={`pdc-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail
