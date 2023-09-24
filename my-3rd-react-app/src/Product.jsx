export default function Product({item,addToCart}) {
    // console.log(item)
    const {name,description,price,category} = item;
    return (
        <div className="w-[30%] bg-orange-50 p-4 m-4">
            <h2 className="py-2 text-lg text-orange-400 font-medium">{name}</h2>
            <h3 className="text-sm text-orange-800">category : {category}</h3>
            <p className="py-2 text-base font-extrabold text-red-600">price : {price} taka</p>
            <span className=" text-[14px]">
             about this products
            <p className=" text-xs text-amber-500">{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim et id reiciendis. Natus iusto consectetur officia! Excepturi, perferendis commodi impedit dolorum tempore minima nostrum ab iure, quas pariatur, molestiae doloribus.</p>
            </span>
            <button onClick={()=>addToCart(item)} className="mt-4">add to cart</button>
        </div>
    )
} 