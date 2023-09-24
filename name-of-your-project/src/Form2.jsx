import React, { useEffect, useRef } from 'react'

const Form2 = () => {
    useEffect(()=>{
        nameref.current.focus();
    },[])
    const nameref = useRef()
    const handelClick =e=>{
        e.preventDefault();
        console.log(nameref.current.value)
    }
    
  return (
    <div>
      <form onSubmit={handelClick}>
        <input ref={nameref} type="text" name='name' />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form2
