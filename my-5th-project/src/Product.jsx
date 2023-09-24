export default function Product({Product,AddTocart}) {
    // console.log(Product)
    const {id,name,price}=Product;
    return (
        <div className="w-44 m-4 bg-green-200 p-3">
        <h2>{name}</h2>
        <p>price : {price}</p>
        <button className="m-2" onClick={()=>AddTocart(Product)}>add</button>
        </div>
    )
}