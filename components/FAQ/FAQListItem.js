import React, { useState } from 'react'

export default function FAQListItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-4xl h-full mx-auto border-b transition-all duration-200">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-primary-main text-2xl font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-10'
          } p-4 pt-0 transform transition-all duration-200 delay-500`}
        >
          <p
            className="text-xl text-secondary-main"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
    </div>
  )
}
