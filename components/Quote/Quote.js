import React from 'react'

export default function Quote() {
  return (
    <section className="flex max-w-xl mx-auto text-primary-main px-4 py-16 mt-8 bg-header-blob sm:bg-quote-blob bg-contain bg-no-repeat bg-center">
      <div className="text-5xl text-secondary-main mr-3">&ldquo;</div>
      <blockquote className="text-lg text-center">
        Many people will lose out on business to competitors they have never
        even heard of simply because they’ve never taken the time to do
        competitive research
      </blockquote>
      <div className="text-5xl text-secondary-main ml-3">&ldquo;</div>
    </section>
  )
}
