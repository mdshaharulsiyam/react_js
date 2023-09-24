export default function Person({name,age}) {
    return(
        age?<li>name : {name} age : {age}</li>:<li>name : {name}</li>
    )
 }