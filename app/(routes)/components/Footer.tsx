import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-white text-black dark:border-white/10 dark:bg-black dark:text-white">
      <div className="container mx-auto grid grid-cols-2 gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/">
            <h2 className="mb-4 text-2xl font-semibold">Velero</h2>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Discover modern fashion and timeless pieces designed for everyday
            style.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/about"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="mb-4 font-semibold">Shopping</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Gift Ideas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Elite Membership
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Shopping Credit
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-4 font-semibold">Help</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Live Support
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                Order Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
        © {new Date().getFullYear()} Velero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
