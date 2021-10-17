import React from 'react'
import FeaturesListItem from './FeaturesListItem'

export default function FeaturesList({ items }) {
  return (
    <article className="flex flex-wrap -mx-2 overflow-hidden">
      {items &&
        !!items.length &&
        items.map((item, index) => (
          <FeaturesListItem
            key={`item-${index}-${item.title}`}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
    </article>
  )
}
