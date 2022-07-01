import React from 'react'

const Categories =({filterProducts, searchFilter}) =>{

 
 const getva=()=>{
  const search = document.getElementById("search");
  search.addEventListener( function (e){
    const inpuText =e.target.value;
    return inpuText
  }); 
}
  return (
    
    <>
     <section className="contianer ml-8  pl-8  mt-50  " >
      <ul>
       <li><input id='search'  onChange={(e) => searchFilter(e.currentTarget.value)} placeholder="Search..."/>       </li>
     <div className='text-black mb-4' >
    <button><a href='./products'>All</a> </button>
  </div> 
    <div className='text-black mb-4'>
    <button onClick={()=> filterProducts("Ikea")}>Ikea </button>
  </div> 
  <div className='text-black mb-4'>
  <button onClick={()=> filterProducts('Marcos')}>Marcos  </button>
</div>

<div className='text-black mb-4' >
  <button onClick={()=> filterProducts('Caressa')}>Caressa  </button>
</div>
<div className='text-black mb-4'>
  <button onClick={()=> filterProducts('Liddy')}>Liddy  </button>
</div>
<input type="range" min="0" max="100" value="100" className="mb-4"/>
</ul>
    </section>
</>
  )
}

export default Categories