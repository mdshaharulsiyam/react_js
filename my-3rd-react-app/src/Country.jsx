export default function Country({countrys,addItemToCart}) {
    const {country,capital,population,area_sq_km,currency,language}=countrys;
    return(
        <>
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">country : {country}</h2>
                <p> capital: {capital}</p>
                <p>population : {population}</p>
                <p>area : {area_sq_km} sq_km</p>
                <p>currency : {currency}</p>
                <p>language : {language}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>addItemToCart(countrys)} className="btn">add to visited</button>
                </div>
            </div>
        </div>
        </>
    )
}