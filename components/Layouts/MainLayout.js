import React from 'react'

export default function MainLayout({
  className = 'h-screen',
  classNameContainer,
  children
}) {
  return (
    <div
      className={className}
    >
      <div className={'h-full container mx-auto' + ` ${classNameContainer}`}>
        {children}
      </div>
    </div>
  )
}
