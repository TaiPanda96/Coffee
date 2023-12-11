import React, { ReactNode } from 'react'
import classNames from 'classnames'

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
        'border',
        'border-brand-600',
        'text-brand-300',
        'hover:text-white',
        'hover:bg-brand-300',
        'transition-colors',
        'px-6',
        'py-4',
        'text-sm',
        'font-semibold',
        className,
      )}
      type="button"
      onClick={onClick}
    >
      {title || ''}
      {children}
    </button>
  )
}
