const Detail = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>$ {props.price}</h4>
        </div>
    )
}

export default Detail
