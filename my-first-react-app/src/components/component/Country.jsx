export default function Country({country,Visited,removeVisited}){
    // console.log(country)
    const {name,flags,area,region} = country;
    return(
        <div className="w-[190px] p-4 bg-zinc-300 my-4 font-bold">
             <img className="h-[100px]" src={flags.png} alt="" />
            <h2 style={{fontSize:"18px"}}>country name : {name.common}</h2>
            <h3 style={{margin:"4px 0",fontSize:"14px"}}>region : {region}</h3>
            <p style={{fontSize:"14px"}}>area : {area}</p>
           <button className="my-2" onClick={()=>Visited(country)}>visited</button>
           <button onClick={()=>removeVisited(country)}>removeVisited</button>

        </div>
    )
}