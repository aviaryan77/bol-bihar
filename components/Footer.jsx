import React from 'react';
import Script from 'next/script';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6 opacity-80 shadow">
      <Script src="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold text-white">
              Let's keep in touch!
            </h4>
            <h5 className="mt-0 mb-2 text-lg text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 mb-6 flex lg:mb-0">
              <FaFacebookF
                className="m-2 items-center justify-center rounded-full bg-white p-1 "
                fontSize={40}
              />
              <FaTwitter
                className="m-2 items-center justify-center rounded-full bg-white p-1 "
                fontSize={40}
              />
              <FaLinkedinIn
                className="m-2 items-center justify-center rounded-full bg-white p-1 "
                fontSize={40}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-white">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Digital Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-white">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-white hover:text-pink-500"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300 my-6" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-white">
              Copyright ©{' '}
              <span id="get-current-year">
                2022 bol-bihar | All rights reserved
              </span>
              <div id="get-current-year">Developed by Twigo Technology</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
