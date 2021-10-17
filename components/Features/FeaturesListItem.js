import React from 'react'
import { Icon } from '../Icon'

export default function FeaturesListItem({ title, desc, icon }) {
  return (
    <article className="w-full h-72 sm:w-1/2 md:w-1/3 p-1 overflow-hidden">
      <div className="w-full h-full p-2 flex flex-col justify-center text-primary-main rounded-lg text-center overflow-ellipsis transition duration-200 hover:cursor-pointer hover:bg-secondary-light">
        <Icon
          name={icon}
          classNameWrapper="w-14 mx-auto mb-8"
          className="p-1 rounded stroke-current text-primary-main"
        />
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-base text-secondary-main line-clamp-4">{desc}</p>
      </div>
    </article>
  )
}
