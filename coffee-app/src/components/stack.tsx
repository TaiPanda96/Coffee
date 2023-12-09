import classNames from 'classnames'
import { ReactNode } from 'react'

interface StackProps {
  align?: 'left' | 'right' | 'center' | 'stretch'
  children: ReactNode
  className?: string
  gap?: number
  grow?: boolean
}

export function Stack({ align, children, className, gap = 2, grow = false }: StackProps) {
  return (
    <div
      className={classNames(className, 'flex', 'flex-col', {
        [`gap-${gap}`]: gap !== 0,
        'items-center': align === 'center',
        'items-end': align === 'right',
        'items-start': align === 'left',
        'items-stretch': align === 'stretch',
        'flex-grow': grow,
      })}
    >
      {children}
    </div>
  )
}
