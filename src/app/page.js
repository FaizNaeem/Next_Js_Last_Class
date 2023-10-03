import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<button className='bg-red-300 p-3 rounded-md'>
  <Link href={'/Products'}>
  products
  </Link>
  </button>
    </main>
  )
}
