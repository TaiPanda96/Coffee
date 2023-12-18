import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Inline } from './inline'

interface ButtonProps {
  title?: string
  onClick?: () => void
  children?: ReactNode
  className?: string
}

export function Button({ title, onClick, children, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        'flex',
        'rounded-full',
        'justify-center',
        'border-gray',
        'transition-colors',
        'px-16',
        'py-3',
        'mt-3',
        'text-sm',
        'font-semibold',
        className,
      )}
      type="button"
      onClick={onClick}
    >
      <Inline gap={8}>
        {title || ''}
        {children}
      </Inline>
    </button>
  )
}
