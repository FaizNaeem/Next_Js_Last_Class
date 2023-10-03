import getData from '@/lib/product'
import Image from 'next/image'
import Link from 'next/link'

export default async function Products() {
const product = await getData()
console.log(product);
  return (
    <main className="">
 <h1 className='text-3xl text-center'>Products</h1>
 <div className='flex flex-row justify-between items-center flex-wrap w-full'>
    {
        product.map((e,i)=>{
  return(
    <>
    <Link href={`/Products/${e.id}`}>
<div className='w-70 flex flex-col items-center border h-1/5'>
<Image src={e.image} width={200} height={200}/>
<h1 className='text-2xl' style={{width:"300px"}}>{e.title}</h1>
<h1>{e.price}</h1>
<button className='p-3 bg-green-600 rounded-md w-44 text-white mb-3'>Order</button>
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