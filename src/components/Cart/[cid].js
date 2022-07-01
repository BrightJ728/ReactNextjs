import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image9 from '../../src/assets/images/high-back-bench.jpeg'
import { useContext } from 'react'
import { AuthContext } from '../../src/Usecontext/context'
export default function cartProducts() {
    const router = useRouter()
    const {image, id, name, name_id, price, description} = router.query
    const auth = useContext(AuthContext)
  return (
    
    <section className='grid grid-cols-2 w-30 justify-items-center pt-4' >
     <div className=''>
            <Image src={image9} width={600} height={500} alt={name} />
     </div>
     <div>
        <h2 className='text-4xl'>{name}</h2>
        {    name_id &&  <p>By {name_id}</p>} 
    	<p>$ {price}</p>
    </div>
    </section>
  )
}
