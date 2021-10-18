import React, { useState } from 'react'
import { CORE_FEATURE_ITEM_LEFT_TYPE } from '../../constants/features-block'

export default function CoreFeaturesListItem({ title, desc, img, type }) {
  const [isLeftImgOrder] = useState(type === CORE_FEATURE_ITEM_LEFT_TYPE)

  return (
    <div className="w-full h-full flex py-8 sm:py-8 justify-between overflow-hidden">
      <div
        className={`w-full h-96 hidden lg:block bg-${img} bg-contain bg-no-repeat ${
          isLeftImgOrder ? 'order-1 bg-left' : 'order-2 bg-right'
        }`}
      />
      <div
        className={`w-full h-auto flex flex-col justify-center ${
          isLeftImgOrder ? 'order-2 items-end' : 'order-1 items-start'
        }`}
      >
        <div className="max-w-md overflow-ellipsis">
          <h3 className="text-2xl font-medium mb-2 text-primary-main">
            {title}
          </h3>
          <p className="text-base text-secondary-main line-clamp-6">{desc}</p>
        </div>
      </div>
    </div>
  )
}
