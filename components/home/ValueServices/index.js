export default function ValueServices() {
     return (
          <section
               id='value-services'
               className='container ml-8 mx-auto flex-col lg:flex mt-40 md:mt-20 flex lg:mt-20'>
               <article id='mortgage-calculator' className='mb-8 w-3/4'>
                    <h2 className='text-xl font-bold'>Mortgage Calculator</h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         Already found a house you want to buy? Want to know how
                         much you need to pay for it each month? Use our
                         mortgage calculator and find out which payment terms
                         and interest rates will suit your desired monthly
                         payment.
                    </p>
                    <a href='/calculator-your-loan'>Calculator Your Loan</a>
               </article>
               <article id='loan-options' className='mb-8 w-3/4'>
                    <h2 className='text-xl font-bold'>Loan Options</h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         We offer a wide range of mortgage options. Choose from
                         15- or 30-year conventional or government-insured loans
                         such as FHA, VA, or USDA with low interest rates and
                         down-payment requirements.
                    </p>
                    <a href='/view-loans' id='view-loans'>
                         View Loans
                    </a>
               </article>
               <article id='mortgage-engineers' className='w-3/4'>
                    <h2 className='text-xl font-bold'>Mortgage Engineers</h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         The Harper Division at Primary Residential Mortgage,
                         Inc. is represented by local licensed loan officers,
                         all of whom have years of experience in the local
                         mortgage market. You can count on our help finding the
                         ideal mortgage option for your home.
                    </p>
                    <a
                         href='/view-mortgage-engineers'
                         id='view-mortgage-engineers'>
                         View Mortgage Engineers
                    </a>
               </article>
          </section>
     );
}
