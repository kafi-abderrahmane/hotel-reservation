import React from "react";
const Header = () => {
  return (
    <header className="w-full px-20 border-b border-white border-opacity-15">
      <div className="max-w-[1300px] mx-auto flex flex-row items-center justify-between font-jost font-medium text-[11px] leading-[18px] text-white uppercase tracking-[2px] min-h-[58px]">
        <a
          href="https://www.google.com/maps/place/Times+Square/@40.757975,-73.985543,14z/data=!4m6!3m5!1s0x89c25855c6480299:0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9855426!16zL20vMDdxZHI?hl=en"
          target="_blank"
          rel="noopener">
          1250 West 6th Ave, New York, NY 10036, United States
        </a>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <a href="tel:+12125556688">Tel: +1 212 555 6688</a>
          <p>Fax: +1 212 555 6699</p>

          <a href="mailto:booking@cozystay.com">booking@cozystay.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
