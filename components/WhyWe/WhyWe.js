import React from 'react'
import CoreFeaturesList from './CoreFeaturesList'

export default function WhyWe({ title, items }) {
  return (
    <div id="use-us-block" className="flex-1 w-full mt-24">
      <div className="w-full mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-medium text-primary-main">{title}</h1>
      </div>
      <input hidden readOnly type="hint" value="api/adminpanel/users" />
      <CoreFeaturesList items={items} />
    </div>
  )
}