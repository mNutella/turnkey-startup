import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex-1 mt-32 m-full">
      <div className="w-full flex flex-wrap space-y-4 sm:space-y-0 justify-center items-center sm:space-x-8 mb-8">
        <div className="w-full sm:flex-1">
          <Link href="/">
            <a
              aria-label="Go home"
              title="ideasy"
              className="inline-flex items-center"
            >
              <Image src="/logo.svg" width={150} height={50} />
            </a>
          </Link>
        </div>
        <div className="w-full sm:flex-1 text-base sm:flex sm:flex-col sm:justify-center sm:items-center">
          <p className="text-lg font-bold tracking-wide text-primary-main">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-primary-main">Email:</p>
            <a
              href="mailto:pr.idearesearch@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-primary-light hover:text-blue-400"
            >
              pr.idearesearch@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:items-center">
          <span className="text-lg font-bold tracking-wide text-primary-main">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              target="_blank"
              href="https://twitter.com/_ideasy"
              className="text-secondary-main transition-colors duration-300 hover:text-primary-light"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-base text-gray-600">
          © Copyright 2021 Idea-Research. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/en/privacy">
              <a className="text-base text-gray-600 transition-colors duration-300 hover:text-primary-light">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/en/terms">
              <a className="text-base text-gray-600 transition-colors duration-300 hover:text-primary-light">
                Terms &amp; Conditions
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
