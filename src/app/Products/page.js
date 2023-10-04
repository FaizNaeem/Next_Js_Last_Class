import getData from '@/lib/product'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'
import Navbar from '@/Component/Navbar';

export default async function Products() {
  
  const product = await getData()
  
  console.log(product);
  
  
  return (

  <main className="">

 <Navbar/>
 <h1 className='text-3xl text-center'>Products</h1>
 <div className='h' >
    {
        product.map((e,i)=>{
  return(
    <>
    <Link href={`/Products/${e.id}`} className='decoration-white'>
    <div className="card  mt-4 " style={{width: "18rem;", height:"auto"}}>
  <Image class="card-img-top"width={300} height={200}  src={e.image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Title: {e.title}</h5>
    <p class="card-text">{e.description}</p>
    <button href="#" className="btn btn-info w-full">Buy Now</button>
  </div>
</div>
    </Link>
    </>
  )

        })
    }
 </div>
    </main>
  )
}