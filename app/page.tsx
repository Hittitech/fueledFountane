import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from './users/components/ImageGallery';

export default function Home() {
  return (
    <main className="w-full md:w-3/4 mx-auto text-center font-'Poppins'">
      <div>
        <div className="mx-2 md:mx-12  border-gray-950 bg-black-400 h-auto md:h-full mt-6 rounded-full bg-black-700 border-2">
          <div className="navbar md:px-8 py-3 flex justify-between">
            <div className="justify-center align-middle my-auto">
              <Link href="#">
                <Image src="/../image 1.png" width="100" height="20" alt="" />
              </Link>
            </div>

            <div className="md:px-10 md:mx-12 flex space-x-8 text-white my-auto">
              <nav>products </nav>
              <nav>dao</nav>
              <nav>builds</nav>
              <nav>docs</nav>
            </div>
            <div>
              <Link href="/users">
                <button className="bg-[#64AE9D] rounded-full text-black px-3 py-2 font-bold">
                  <div className="justify-center my-auto text-center text-sm px-2">launch app</div>
                </button>
              </Link>
            </div>
          </div>
          
        </div>
        <Image className='-mb-[300px] m-auto ' src="/../Ellipse.png" width="470" height="450" alt="" />

        <div className='happy -mb-[200px] flex text-center justify-center  scale-x-150  scale-y-150 '>
        <Image src="/../Rectangle1.png" width="170" height="160" alt="" />
        <Image src="/../Rectangle2.png" width="170" height="160" alt="" />
        

        </div>
        <div className="mx-auto p-4 md:p-12 flex flex-col justify-between z-10">
          <h3 className="pt-10 md:pt-[7rem] text-[#64AE9D] text-xs">
            JET PROTOCOL
          </h3>
          <p className="tracking-wide space-y-4 px-2 md:px-12 py-4 text-3xl md:text-5xl text-white">
            the next generation of
            <br/>
            <div className='w-10'></div>
            <span className="tracking-wide font-serif italic">
              defi governance
            </span>
          </p>
          <p className="p-2 md:p-6 text-lg md:text-xl text-slate-300">
            experience open source, transparent and efficient borrowing <br />
            <span>and lending on Solana</span>.
          </p>
          <div className="space-x-4">
            <Link href="/users">
              <button className="bg-[#64AE9D] rounded-full font-bold text-black px-3 py-2 text-center">
                <div className="text-center text-sm px-2 md:px-3">read docs</div>
              </button>
            </Link>
            <Link href="/users">
              <button className="border-2 border-slate-300 font-bold bg-black rounded-full text-white px-3 py-2 text-center align-middle">
                <div className="text-center text-sm px-2 md:px-3">how it works</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-2 md:mt-10">
          <ImageGallery />
        </div>
      </div>
    </main>
  );
}
