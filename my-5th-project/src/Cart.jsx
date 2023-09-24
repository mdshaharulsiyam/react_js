export default function Cart({cart,totalMoneyIhacve,remainingprice}){
return (
    <div className="block">
    <h2>total mony : {totalMoneyIhacve}</h2>
    <p>total cost :</p>
    <p>remainin : {remainingprice}</p>
    {
        cart.map(cart=> <h2 key={cart.id}>{cart.name}</h2>)
    }
    </div>
)
}