import React from 'react'

export default function Quote({ content, author }) {
  return (
    <section className="max-w-xl mx-auto text-primary-main px-4 py-16 mt-8 bg-header-blob sm:bg-quote-blob bg-contain bg-no-repeat bg-center">
      <div className="flex mb-2">
        <div className="text-5xl text-secondary-main mr-3"><i>&ldquo;</i></div>
        <blockquote className="text-lg text-center"><i>{content}</i></blockquote>
        <div className="text-5xl text-secondary-main ml-3"><i>&ldquo;</i></div>
      </div>
      <p className="text-secondary-main text-center"> {author}</p>
    </section>
  )
}
