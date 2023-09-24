import React from 'react'

const Test = () => {
    const handelClick =e=>{
        e.preventDefault();
        console.log()
    }
  return (
    <div>
      <form onSubmit={handelClick}>
        <input type="text" name='name' />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Test
