import React from 'react'

export default function CTA({ content, author }) {
  return (
    <div className="w-full mx-auto text-primary-main p-4 sm:p-8 mt-24 bg-secondary-light rounded-xl">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex mb-2">
            <div className="flex items-start justify-center text-5xl sm:text-7xl text-secondary-main mr-3 sm:mr-8">
              <i>&ldquo;</i>
            </div>
            <blockquote className="text-xl text-center lg:text-left sm:text-4xl">
              <p className="leading-snug">{content}</p>
            </blockquote>
            <div className="flex items-end justify-center text-5xl sm:text-7xl text-secondary-main mr-3 -mb-6 sm:mr-5 sm:-mb-7">
              <i>&ldquo;</i>
            </div>
          </div>
          <p className="text-secondary-main text-lg sm:text-xl text-center lg:text-left"><i>{author}</i></p>
        </div>
        <div className="full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
          <a
            href="#early-access-block"
            className="inline-flex items-center justify-center py-5 px-7 lg:py-8 lg:px-16 font-medium text-base lg:text-xl rounded-full tracking-wide text-white transition duration-200 bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
          >
            Request early access
          </a>
        </div>
      </div>
    </div>
  )
}
