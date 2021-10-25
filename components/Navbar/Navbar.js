import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuShow, setMenuShow] = useState(false)

  return (
    <div className="flex-1 sticky top-0 py-2 bg-common-white z-10">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="Go home"
            title="ideasy"
            className="inline-flex items-center"
          >
            <Image src="/logo.svg" width={150} height={50} />
          </a>
        </Link>
        <ul className="hidden items-center space-x-8 lg:flex">
          <li>
            <a
              href="#use-us-block"
              aria-label="Why Us"
              title="Why Us"
              className="text-lg font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#features-block"
              aria-label="Features"
              title="Features"
              className="text-lg font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#faq-block"
              aria-label="FAQ"
              title="FAQ"
              className="text-lg font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#early-access-block"
              aria-label="Request early access"
              title="Request early access"
              className="text-lg inline-flex items-center justify-center h-12 px-6 font-medium rounded-full tracking-wide text-secondary-main transition duration-200 hover:bg-primary-light-accent hover:text-common-white focus:outline-none focus:bg-primary-light-accent focus:text-common-white"
            >
              Request early access
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          {!isMenuShow ? (
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded-xl focus:outline-none focus:shadow-outline hover:bg-secondary-light focus:bg-secondary-light"
              onClick={() => setMenuShow(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              aria-label="Close Menu"
              title="Close Menu"
              className="p-2 -mr-1 transition duration-200 rounded-xl focus:outline-none focus:shadow-outline hover:bg-secondary-light focus:bg-secondary-light"
              onClick={() => setMenuShow(false)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                ></path>
              </svg>
            </button>
          )}
          <nav
            className={`absolute top-12 left-0 w-full p-5 text-center bg-common-white border rounded-xl ${!isMenuShow && 'hidden'
              }`}
          >
            <ul className="space-y-4">
              <li>
                <a
                  href="#use-us-block"
                  aria-label="Use Us"
                  title="Use Us"
                  className="text-lg font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
                  onClick={() => setMenuShow(false)}
                >
                  Use Us
                </a>
              </li>
              <li>
                <a
                  href="#features-block"
                  aria-label="Features"
                  title="Features"
                  className="p-2 font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
                  onClick={() => setMenuShow(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq-block"
                  aria-label="FAQ"
                  title="FAQ"
                  className="text-lg font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
                  onClick={() => setMenuShow(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#early-access-block"
                  aria-label="Features"
                  title="Features"
                  className="p-2 font-medium tracking-wide text-primary-main transition-colors duration-200 hover:text-primary-light-accent"
                  onClick={() => setMenuShow(false)}
                >
                  Request early access
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
