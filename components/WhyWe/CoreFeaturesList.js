import React from 'react'
import CoreFeaturesListItem from './CoreFeaturesListItem'

export default function CoreFeaturesList({ items }) {
  return (
    <div className="flex flex-wrap -mb-24 overflow-hidden">
      {items &&
        !!items.length &&
        items.map((item, index) => (
          <CoreFeaturesListItem
            key={`item-${index}-${item.title}`}
            title={item.title}
            desc={item.desc}
            img={item.img}
            type={item.type}
          />
        ))}
    </div>
  )
}
