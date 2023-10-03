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
<div className='w-70 flex flex-col items-center '>
<Image src={e.image} width={200}/>
</div>
    </>
  )

        })
    }
 </div>
    </main>
  )
}