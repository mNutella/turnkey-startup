import Image from 'next/image'
import React from 'react'
import { Icon } from '../Icon'

export default function Header({
  titlePrimary,
  titleSecondary,
  desc,
  ctaBtnText
}) {
  return (
    <section className="flex-1 mt-16">
      {/* <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl"> */}
      <div className="flex justify-between ">
        <div className="pt-16 mb-10 sm:mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5 text-center sm:text-left">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-4 py-px mb-4 text-xs font-semibold tracking-wider text-success-main uppercase rounded-full bg-success-light">
                Brand new
              </p>
            </div>
            <h1 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-primary-main sm:text-7xl sm:leading-none">
              {titlePrimary}{' '}
              <span className="inline-block text-primary-light">
                {titleSecondary}
              </span>
            </h1>
            <p className="text-secondary-main text-lg">{desc}</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 p-7 font-medium text-sm tracking-wide text-white transition duration-200 rounded-lg bg-primary-light hover:bg-primary-light-accent focus:shadow-outline focus:outline-none"
            >
              {ctaBtnText}
            </a>
          </div>
        </div>
        <div className="hidden lg:block bg-header-blob bg-contain bg-no-repeat">
          <Image
            src="/img/header-illust.png"
            alt="Header illustration"
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <a href="/">
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
