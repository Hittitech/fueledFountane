import React from 'react'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <div className= ' pt-4  text-white flex flex-col m-auto justify-center text-center text-4xl '>
      <h1 className=' bg-[#64AE9D] text-black text-center'>Fueled Fountane</h1> 

      <div>
        <Link href="/">
        <button className=' mt-[20rem] py-3 px-12 bg-[#64AE9D] font-bold text-lg text-black border rounded-full'>Go Back</button>
</Link>
      </div>
      
      </div>

  )
}

export default UsersPage   