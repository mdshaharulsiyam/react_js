import React, { useState } from 'react'

const Simpleform = () => {
    // way 1
    const handelClick =e=>{
        e.preventDefault();
        // console.log(e.target.name.value)
    }
    
    // way 2
    const [name, setName] = useState('your name')
    const onchangeevent =(e)=>{
      setName(e.target.value)
    }
    const handelClick2 =e=>{
        e.preventDefault();
        console.log((name))
    }
  return (
    <div>
      {/* <form onSubmit={handelClick} >
        <input type="text" name='name' />
        <input type="submit" value="submit" />
      </form> */}
        <form onSubmit={handelClick2}>
        <input onChange={onchangeevent} type="text" name='name' value={name} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Simpleform
