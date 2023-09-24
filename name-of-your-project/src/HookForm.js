import { useState } from "react"

const useInputState = (defaultvalue = null)=>{
const [value,setvalue]=useState(defaultvalue)
const hamdelchange = e=>{
    setvalue(e.target.value)
}
return [value, hamdelchange]
}
export default useInputState;