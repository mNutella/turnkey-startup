import React from 'react'
import { Icon } from '../Icon'

export default function Header() {
  return (
    <div className="flex-1 mt-8">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center w-full mb-10 lg:mb-0 text-center lg:text-left">
          <div className="lg:max-w-xl mb-6">
            <div>
              <p className="inline-block text-sm px-4 py-1 mb-4 font-semibold tracking-wider text-common-white uppercase rounded-full bg-secondary-main">
                Comming soon
              </p>
            </div>
            <h1 className="lg:max-w-lg mb-6 text-6xl sm:text-7xl font-bold tracking-tight text-primary-main sm:leading-none">
              Your Tech{' '}
              <span className="inline-block text-success-dark">
                Idea Research
              </span>
            </h1>
            <h6 className="lg:max-w-md text-secondary-main text-xl sm:text-2xl">
              Forget about manual research.
              <br />
              Idea validation is now fast and easy with search engine <b>ideasy</b>
            </h6>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <a
              href="#early-access-block"
              className="inline-flex items-center justify-center py-5 px-7 font-medium text-base rounded-full tracking-wide text-white transition duration-200 bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
            >
              Request early access
            </a>
          </div>
        </div>
        <div className="w-full h-header-img hidden lg:block bg-header-illust bg-contain bg-right bg-no-repeat" />
      </div>
      <div className="w-full flex justify-center items-center">
        <a href="#why-us-block">
          <Icon
            name="scroll-down"
            classNameWrapper="w-20 animate-bounce"
            className="p-1 rounded cursor-pointer stroke-current text-primary-main hover:text-secondary-main hover:opacity-50 hover:bg-indigo-950 hover:bg-opacity-80 transition-all duration-75"
          />
        </a>
      </div>
    </div>
  )
}
