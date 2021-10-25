import React, { useState } from 'react'
import { CORE_FEATURE_ITEM_LEFT_TYPE } from '../../constants/features-block'

export default function CoreFeaturesListItem({ title, desc, img, type }) {
  const [isLeftImgOrder] = useState(type === CORE_FEATURE_ITEM_LEFT_TYPE)

  return (
    <div className="w-full h-full flex justify-between overflow-hidden mb-24">
      <div
        className={`w-full h-header-img hidden lg:block ${img} bg-contain bg-no-repeat ${isLeftImgOrder ? 'order-1 bg-left' : 'order-2 bg-right'
          }`}
      />
      <div
        className={`w-full h-auto flex flex-col justify-center text-center lg:text-left ${isLeftImgOrder ? 'order-2 items-end' : 'order-1 items-start'
          }`}
      >
        <div className="w-full lg:max-w-md">
          <h3 className="text-3xl sm:text-5xl font-medium mb-4 text-primary-main">
            {title}
          </h3>
          <p
            className="text-xl sm:text-2xl text-secondary-main"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </div>
    </div>
  )
}
