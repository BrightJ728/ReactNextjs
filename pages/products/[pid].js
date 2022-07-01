import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image9 from '../../src/assets/images/high-back-bench.jpeg'
import { useContext } from 'react'
import { AuthContext } from '../../src/Usecontext/context'
export default function singleProduct() {
    const router = useRouter()
    const {image, id, name, name_id, price, description} = router.query
    const auth = useContext(AuthContext)
  return (
    
    <section className='grid grid-cols-2 w-full justify-items-center pt-4' >
     <div className=''>
            <Image src={image9} width={600} height={500} alt={name} />
     </div>
     <div>
        <h2 className='text-4xl'>{name}</h2>
        {    name_id &&  <p>By {name_id}</p>} 
    	<p>$ {price}</p>
        <p className='pt-10'>{description}</p>
        <button onClick={auth.increment} className=' justity-items-center text-lg bg-orange-700 align-text-middle'>Add to cart</button>
    </div>
    </section>
  )
}
