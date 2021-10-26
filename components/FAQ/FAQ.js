import React from 'react'
import FAQList from './FAQList'

export default function FAQ({ title, items }) {
  return (
    <div id="faq-block" className="flex-1 w-full mt-24 sm:mt-32">
      <div className="w-full mx-auto mb-24 text-center">
        <h1 className="text-5xl sm:text-7xl font-medium text-primary-main">{title}</h1>
      </div>
      <FAQList items={items} />
    </div>
  )
}
