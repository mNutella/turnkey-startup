import React from 'react'
import CoreFeaturesList from './CoreFeaturesList'
import FeaturesList from './FeaturesList'

export default function Features({ title, subtitle, features, coreFeatures }) {
  return (
    <section id="features-block" className="flex-1 w-full mt-16">
      <div className="w-full mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-medium text-primary-main">{title}</h1>
      </div>
      <CoreFeaturesList items={coreFeatures} />
      <div className="w-full mx-auto my-16 text-center">
        <h3 className="text-3xl font-medium text-primary-main">{subtitle}</h3>
      </div>
      <FeaturesList items={features} />
    </section>
  )
}
