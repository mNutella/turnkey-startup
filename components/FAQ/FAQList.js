import React from 'react'
import FAQListItem from './FAQListItem'

export default function FAQList({ items }) {
  return (
    <div className="block">
      {items &&
        !!items.length &&
        items.map((item, index) => (
          <FAQListItem key={`faq-list-item-${index}`} title={item.title} content={item.content} />
        ))}
    </div>
  )
}
