import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from './users/components/ImageGallery'

export default function Home() {
  return (
    
    <main className="w-3/4    m-auto   text-center font-['Poppins']">
      <div>
      <div className=' mx-12 +    h-full  mt-6  rounded-full bg-black-700 border-2'>
        <div className=' navbar px-8 py-3  flex justify-between border-slate-500'>
         <div className=' justify-center align-middle my-auto'>
         <Link
          href="#">
            <Image  src="/../image 1.png" width="100" height="20" alt=''/>

          </Link>
         </div>
          <div className=' px-10 mx-12 flex space-x-8 text-white my-auto'>
          <nav>products</nav>
          <nav>dao</nav>
          <nav>builds</nav>
          <nav>docs</nav>
          </div>
          <div>
          <Link href="#">
              <button className=' bg-[#64AE9D] rounded-full text-black px-3 py-2  text-center  font-bold'><div className=' justify-center  my-auto text-center text-sm px-2  '>launch app</div></button>
            </Link>
          </div>
          
        </div>
        <div className='main'>
          <div className='buttoni'>

          </div>
        </div>
      
      </div>

      <div className='mx-auto p-12  flex flex-col  justify-between'>
        <h3 className='  pt-[7rem]  text-[#64AE9D]  text-xs '>JET PROTOCOL</h3>
        <p className='tracking-wide space-y-4 px-12 py-4 text-5xl text-white ' >The next generation of
        <br className='mt-6'></br>
        <span className=' tracking-wide font-serif  italic '> Defi Governance </span></p>
        <p className=' p-6  mx-auto text-xl text-slate-300'>experience open source, transparent and efficient borrowing <br></br><span>and lending on solana</span>.</p>
        <div className='space-x-4'>
            <Link href="#">
              <button className='bg-[#64AE9D] rounded-full font-bold text-black px-3 py-2  text-center '><div className='text-center text-sm px-3'>read docs</div></button>
            </Link>
            <Link href="#">
              <button className=' border-2 border-slate-300 font-bold bg-black rounded-full text-white px-3 py-2 text-center align-middle '><div className='text-center text-sm px-3'>how it works</div></button>
            </Link>

        </div>

      </div>
      <div>
        <ImageGallery/>
      </div>
      </div>
     
    </main>
  )
}
