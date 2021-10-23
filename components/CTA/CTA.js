import React from 'react'

export default function CTA({ content, author }) {
  return (
    <div className="w-full lg:max-w-4xl mx-auto text-primary-main p-8 mt-24 bg-secondary-light rounded-xl">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex mb-2">
            <div className="flex items-center justify-center sm:items-start sm:justify-start text-5xl text-secondary-main mr-4">
              <i>&ldquo;</i>
            </div>
            <blockquote className="text-xl text-center sm:text-center sm:text-2xl">
              <i>{content}</i>
            </blockquote>
            <div className="flex items-center justify-center sm:items-start sm:justify-start text-5xl text-secondary-main ml-3">
              <i>&ldquo;</i>
            </div>
          </div>
          <p className="text-secondary-main text-lg sm:text-xl text-center">{author}</p>
        </div>
        <div className="full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center lg:justify-end">
          <a
            href="#early-access-block"
            className="inline-flex items-center justify-center h-12 p-7 font-medium text-base rounded-full tracking-wide text-white transition duration-200 bg-primary-light hover:bg-primary-light-accent focus:outline-none focus:bg-primary-light-accent"
          >
            Request early access
          </a>
        </div>
      </div>
    </div>
  )
}
