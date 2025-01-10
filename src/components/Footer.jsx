import React from 'react';
import { footerLinks } from '../constants';

// Constants
const PHONE_NUMBER = '000800-040-1966';
const COPYRIGHT_TEXT = 'Copyright @ 2024 Apple Inc. All rights reserved.';
const SHOP_MESSAGE = 'More ways to shop:';
const FIND_STORE_TEXT = 'Find an Apple Store';
const OTHER_RETAILER_TEXT = 'other retailer';
const SEPARATOR = ' | ';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">

        {/* Shopping Options Section */}
        <div>
          <p className="font-semibold text-gray text-xs">
            {SHOP_MESSAGE}{' '}
            <span className="underline text-blue">
              {FIND_STORE_TEXT}{' '}
            </span>
            or{' '}
            <span className="underline text-blue">
              {OTHER_RETAILER_TEXT}
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call {PHONE_NUMBER}
          </p>
        </div>

        {/* Divider Line */}
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        {/* Footer Links Section */}
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">{COPYRIGHT_TEXT}</p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">{SEPARATOR}</span>
                )}
              </p>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
