import React from 'react'
import { Icon } from '../Icon'

export default function Header() {
  return (
    <section className="flex-1 mt-16">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center w-full mb-10 sm:mb-0 text-center sm:text-left sm:animate-slideIn">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block text-sm px-4 py-1 mb-4 font-semibold tracking-wider text-common-white uppercase rounded-full bg-secondary-main">
                Comming soon
              </p>
            </div>
            <h1 className="max-w-lg mb-6 text-5xl font-bold tracking-tight text-primary-main sm:text-7xl sm:leading-none">
              Your tech{' '}
              <span className="inline-block text-success-dark">
                idea research
              </span>
            </h1>
            <h6 className="max-w-md text-secondary-main text-xl">
              Identify your real competitors, improve your idea and become a{' '}
              <span className="inline-block text-2xl">🦄</span>
              {'  '}
              startup
            </h6>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <a
              href="#early-access-block"
              className="inline-flex items-center justify-center h-12 p-7 font-medium text-base tracking-wide text-white transition duration-200 rounded-lg bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
            >
              Request early access
            </a>
          </div>
        </div>
        <div className="w-full animate-fadeIn h-header-img hidden lg:block bg-header-illust bg-contain bg-right bg-no-repeat" />
      </div>
      <div className="w-full flex justify-center items-center">
        <a href="#features-block">
          <Icon
            name="scroll-down"
            classNameWrapper="w-20 animate-bounce"
            className="p-1 rounded cursor-pointer stroke-current text-primary-main hover:text-secondary-main hover:opacity-50 hover:bg-indigo-950 hover:bg-opacity-80 transition-all duration-75"
          />
        </a>
      </div>
    </section>
  )
}
