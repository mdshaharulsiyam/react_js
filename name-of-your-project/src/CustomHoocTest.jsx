import React from 'react'
import useInputState from './HookForm'
const customHookTest = () => {
    const [names,handelname] = useInputState('siyam')
    const handelClick =e=>{
        e.preventDefault();
        console.log(names)
    }
  return (
    <div>
       <form onSubmit={handelClick}>
        <input type="text" name='name' value={names} onChange={handelname} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default customHookTest
