import React from 'react'
import FeaturesList from './FeaturesList'

export default function Features({ title, features }) {
  return (
    <section id="features-block" className="flex-1 w-full py-16">
      <div className="w-full mx-auto mb-16 text-center">
        <h1 className="text-6xl font-medium text-primary-main">{title}</h1>
      </div>
      <FeaturesList items={features} />
    </section>
  )
}
