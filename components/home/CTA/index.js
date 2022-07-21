import Image from 'next/image';
import placeholder from 'assets/images/placeholder.png';

export default function CTA() {
     return (
          <>
               <div className='relative'>
                    <Image src={placeholder} alt='placeholder image' />
                    <div className='absolute inset-y-1/2 right-10'>
                         <h1 className='text-large text-4xl text-right font-extrabold text-gray-900 sm:text-2xl md:text-3xl'>
                              SIMPLE.
                              <br />
                              <span>QUICK. </span>
                              <span className="text-sky-800">STRESS FREE. </span> <br />
                              <span> LIKE MOVING HOME SHOULD BE.</span>
                         </h1>
                         <div className='justify-center mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                              <div className='w-full px-8 py-3 rounded-md shadow text-center m-3 border font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700'>
                                   <a
                                        href='#'
                                        className=''>
                                        Buy a Home
                                   </a>
                              </div>
                              <div className='w-full px-8 py-3 rounded-md shadow text-center m-3 border font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 '>
                                   <a
                                        href='#'
                                        className=''>
                                        Refinance Your Home
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
