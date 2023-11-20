import classNames from 'classnames'
import { ReactNode } from 'react'

interface StackProps {
  spacing?: number
  gap?: number
  children: ReactNode
  className?: string
  direction?: 'row' | 'column'
  align?: 'start' | 'end' | 'center' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  wrapReverse?: boolean
}

export function Stack({ align, children, className, direction, gap = 2 }: StackProps) {
  return (
    <div
      className={classNames(
        'flex',
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
          'items-start': align === 'start',
          'items-end': align === 'end',
          'items-center': align === 'center',
          'items-stretch': align === 'stretch',
          'justify-start': align === 'start',
          'justify-end': align === 'end',
          'justify-center': align === 'center',
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
