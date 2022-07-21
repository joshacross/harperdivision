export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <>
        <div className="mt-24 m-8 text-center">
          <h6>
            For assistance, please call <a href="tel:16158226220" no-follow >(615) 822-6220</a> or email us at <a href="mailto:support@theharperdivision.com" no-follow >support@theharperdivision</a>
          </h6>
          <h6 className="mt-5">Copyright © {year} Primary Residential Mortgage, Inc.</h6>
        </div>
      </>
    )
  }