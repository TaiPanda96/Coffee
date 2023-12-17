import React from 'react'
import classNames from 'classnames'

interface HorizontalLineProps {
  thickness?: number
  color?: string
  className?: string
}

export function HorizontalLine({ thickness = 2, className, color }: HorizontalLineProps) {
  return (
    <div
      className={classNames(className, 'border-b', `${color}`)}
      style={{ borderBottomWidth: `${thickness}px`, borderBottomColor: `${color}` }}
    />
  )
}
