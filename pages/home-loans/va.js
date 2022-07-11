import Image from "next/image";
import keyDoorImage from "assets/images/keyDoorImage.jpeg";
import waveTheFlagImage from "assets/images/wavingtheflag.jpeg";
import americanFlagBackgroundImage from 'assets/images/americanflagbackground.png';
import Contact from "components/common/Contact";

export default function VA() {
  return (
    <>
      <div className="flex content-center justify-center">
      <Image src={americanFlagBackgroundImage} alt="american flag against a concrete wall"/>
      </div>
      <section className="prose flex flex-col md:container md:mx-auto m-8 p-10">
        <article>

          <h1>VA Loans</h1>
          <h2>Helping Veterans Achieve Homeownership</h2>
          <p className="text-2xl italic">
            The VA loan program is ideal for veterans, military personnel, and
            military families looking to purchase their own home. If you are
            searching for a provider that gives you access to VA loans, Primary
            Residential Mortgage, Inc. has you covered. Unlike other VA loan
            companies, our national presence along with our intimate local
            market knowledge allows us to offer better VA loan terms and rates
            than most.
          </p>
          <h2>Loan Highlights</h2>
          <div className="flex">
          <div>
          <ul className="md:text-2xl sm:text-xl">
            <li>100% financing*</li>
            <li>Lower interest rates</li>
            <li>No down payment</li>
            <li>No mortgage insurance</li>
            <li>VA Loans are assumable</li>
            <li>No prepayment penalties</li>
            <li>
              VA Funding Fee can be financed or waved for disabled veterans
            </li>
          </ul>
          </div>
          <div>
          <Image
            src={keyDoorImage}
            alt="close up set of keys inside an open door"
          />
          </div>
          </div>
          <h2>
            A loan program specifically designed for Veterans, service members
            and their families.
          </h2>
          <a href="/search-for-homes-now">Search for Homes Now</a>
          <a href="/home-purchase-qualifier">Home Purchase Qualifier</a>
        </article>
        <article>
          <h2>Loan Eligibility</h2>
          <div className="flex">
          <Image
            src={waveTheFlagImage}
            alt="a dad and son holding a flag together in formal attire waiving a flag"
          />
          <ul className="text-2xl">
            <li>Certificate of Eligibility</li>
            <li>DD-214</li>
            <li>Minimum Credit Score 620</li>
            <li>Must Be the Primary Residence</li>
            <li>DTI of No More Than 41%</li>
          </ul>
          </div>
        </article>
        <article>
          <h2>
            The Harper Division at Primary Residential Mortgage is here to
            answer any questions and help you get the loan that's right for you.
          </h2>
          <h2>
            If you have any questions about VA loans or your eligibility, please{" "}
            <a href="/contact">Contact Us</a>
          </h2>
        </article>
        <article>
          <h2>Apply Online Now</h2>
          <p className="text-2xl italic">
            PRMI provides you with a streamlined application process called
            ClickApproval that is much faster than traditional ways of applying
            for a mortgage. Our online process is simple and secure. Apply
            knowing the information you provide is safe and protected. Click now
            for an exceptional mortgage experience.
          </p>
          <a href="/apply">Click to Apply</a>
        </article>
        <article>
          <p>
            *Closing costs and fees may still apply. *This approval is not a
            commitment to lend and is subject to identification of a suitable
            property and completion of a fully executed purchase contract, a
            written rate lock agreement, verification of all information
            provided in the loan application by the borrower(s), satisfaction of
            all automated and underwriter conditions, a satisfactory appraisal
            of the subject property, a satisfactory title commitment free of
            encumbrances, and a final underwriting approval and execution of all
            documents required by the lender. These requirements may not be all
            inclusive. Additional information may be required from you. Changes
            to the current market rate will affect the loan amount for which you
            may qualify. Interest rates and program terms are subject to change
            without notice. ***The content in this marketing advertisement has
            not been approved, reviewed, sponsored or endorsed by any department
            or government agency.
          </p>
        </article>
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
