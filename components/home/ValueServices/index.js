export default function ValueServices() {
     return (
          <section
               id='value-services'
               className='container ml-8 mb-20 mr-8 flex-col md:flex-row lg:flex-row content-center items-center mt-40 md:mt-20 lg:mt-20'>
               <article id='mortgage-calculator' className='mb-8'>
                    <h2 className='text-xl font-bold'>Mortgage Calculator</h2>
                    <p>
                         Already found a house you want to buy? Want to know how
                         much you need to pay for it each month? Use our
                         mortgage calculator and find out which payment terms
                         and interest rates will suit your desired monthly
                         payment.
                    </p>
                    <a href='/calculator-your-loan'>Calculator Your Loan</a>
               </article>
               <article id='loan-options' className='mb-8'>
                    <h2 className='text-xl font-bold'>Loan Options</h2>
                    <p>
                         We offer a wide range of mortgage options. Choose from
                         15- or 30-year conventional or government-insured loans
                         such as FHA, VA, or USDA with low interest rates and
                         down-payment requirements.
                    </p>
                    <a href='/view-loans' id='view-loans'>
                         View Loans
                    </a>
               </article>
               <article id='mortgage-engineers' className=''>
                    <h2 className='text-xl font-bold'>Mortgage Engineers</h2>
                    <p>
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
