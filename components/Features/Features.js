import React from 'react'
import FeaturesList from './FeaturesList'

export default function Features({ title, items }) {
  return (
    <div id="features-block" className="flex-1 w-full mt-24 sm:mt-36">
      <div className="w-full mx-auto mb-24 text-center">
        <h1 className="text-5xl sm:text-7xl font-medium text-primary-main">{title}</h1>
      </div>
      <FeaturesList items={items} />
    </div>
  )
}
