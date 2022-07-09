import Image from 'next/image';
import givingNetworkImage from '/assets/images/givingnetwork.svg';
import mbaOpenDoorsImage from '/assets/images/mba-open-doors.png';

export default function Advocacy () {
    return (
        <>
            <div className="flex flex-wrap m-8 justify-around">
            <div className=" w-1/2">
            <Image src={givingNetworkImage} alt="Giving Network logo"  />

            <h1 className="text-6xl">
                $50,454 Raised from the MBA Opens Doors Foundation
            </h1>
            <p>
                A vital part of PRMI's culture is giving back to our communities to create real change in the lives of those around us.
            </p>
            <p>
                Thanks to your generous donations, we met our corporate match goal for our MBA Opens Doors Foundation fundraiser. We are thrilled to announce that we have raised $50,545 to help cover rent and mortgage costs for families with critically ill children.
            </p>
            <p>
                Thank you to everyone who donated.
            </p>
            </div>
            <div className="w-1/3 flex justify-center">
            <Image src={mbaOpenDoorsImage} alt="MBA Open Doors Foundation logo"/>
            </div>
            </div>
            

        </>
    )
}