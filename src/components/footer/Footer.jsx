import React from "react";
import FooterLogo from "../../assets/svg/logofooter.svg";

const Footer = () => {
  return (
    <section className="footer bg-[#272727] w-full h-96">
      <div className="container">
        <div className="footer__wrapper w-full flex pt-16">
          <div className="flex flex-col gap-4 w-1/2 border-t-2">
            <img
              className="w-[250px] h-[100px]"
              src={FooterLogo}
              alt="logo image"
            />
            <p className="text-white">
              Your natural candle made for <br />
              your home and for yourwellness.
            </p>
          </div>
          <div className="w-1/2 flex border-t-2">
            <div className="flex flex-col items-start gap-4 pt-10 w-1/3">
              <button className="text-[#56B280]">Discovery</button>
              <button className="text-white hover:text-[#56B280]">New season</button>
              <button className="text-white hover:text-[#56B280]">Most searched</button>
              <button className="text-white hover:text-[#56B280]">Most selled</button>
            </div>
            <div className="flex flex-col items-start gap-4 pt-10 w-1/3">
              <button className="text-[#56B280]">About</button>
              <button className="text-white hover:text-[#56B280]">Help</button>
              <button className="text-white hover:text-[#56B280]">Shipping</button>
              <button className="text-white hover:text-[#56B280]">Affiliate</button>
            </div>
            <div className="flex flex-col items-start gap-4 pt-10 w-1/3">
              <button className="text-[#56B280]">Info</button>
              <button className="text-white hover:text-[#56B280]">Contact us</button>
              <button className="text-white hover:text-[#56B280]">Privacy Policies</button>
              <button className="text-white hover:text-[#56B280]">Terms & Conditions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
