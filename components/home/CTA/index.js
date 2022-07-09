import Image from "next/image";
import manWithCoffee from "assets/images/manwithcoffee.png";

export default function CTA() {
  return (
    <>
      <div className="relative">
        <Image
          src={manWithCoffee}
          alt="a man with a beard sitting cross-legged in an arm chair holding a cup of coffee"
        />
        <div className="absolute inset-y-1/4 right-10">
          <h1 className="text-large text-4xl text-right font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            SIMPLE.
            <br />
            <span>QUICK. </span>
            STRESS FREE. <br />
            <span> LIKE MOVING HOME SHOULD BE.</span>
          </h1>
          <div className="flex mt-5 sm:mt-8 sm:flex sm:justify-end">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Buy a Home
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Refinance Your Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
