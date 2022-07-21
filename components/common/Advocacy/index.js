import Image from 'next/image';
import givingNetworkImage from '/assets/images/givingnetwork.svg';
import mbaOpenDoorsImage from '/assets/images/mba-open-doors.png';

export default function Advocacy() {
     return (
          <>
               <div className=''>
                    <div className='m-8'>
                         <Image
                              src={givingNetworkImage}
                              alt='Giving Network logo'
                         />

                         <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                              $50,454 Raised from the MBA Opens Doors Foundation
                         </h1>
                         <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                              A vital part of PRMI's culture is giving back to
                              our communities to create real change in the lives
                              of those around us.</p>
                              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                              Thanks to your generous donations, we met our
                              corporate match goal for our MBA Opens Doors
                              Foundation fundraiser. We are thrilled to announce
                              that we have raised $50,545 to help cover rent and
                              mortgage costs for families with critically ill
                              children.
                              </p>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         Thank you to everyone who donated.
                        </p>
                    </div>
               </div>
          </>
     );
}
