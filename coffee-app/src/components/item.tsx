import React from 'react'
import classNames from 'classnames'
import { Inline } from './inline'
import { SectionCard } from './section-card'
import { Stack } from './stack'
import { TextInput } from './text-input'
import { Button } from './button'

interface ItemProps {
  className?: string
  title: string
  description: string
  price: string
  count?: string
  children?: React.ReactNode
}

export function Item({ className, title, description, price, count, children }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionCard
        className={classNames('rounded', 'px-4', 'py-6', 'shadow-md brown-shadow', className)}
      >
        <Stack gap={8}>
          <Stack gap={8}>
            <Inline justify="center">
              <TextInput value={title} color="regular" as="h1" bold />
            </Inline>
            {children}
            <TextInput value={price} color="regular" as="h3" bold />
            <TextInput value={description} color="inverted-light" as="h3" />
            <Button
              className={classNames(
                'flex',
                'bottom-2',
                'right-2',
                'flex',
                'rounded-full',
                'border',
                'border-brand-900',
                'bg-inherit',
                'text-brand-900',
                'hover:text-white',
                'hover:bg-brand-900',
                'transition-colors',
                'px-2.5',
                'py-2.5',
                'text-sm',
                'font-semibold',
              )}
            >
              <Inline justify="center" align="center">
                <TextInput value="Add to Cart" color="regular" as="span" size="sm" />
              </Inline>
            </Button>
          </Stack>
        </Stack>
      </SectionCard>
    </div>
  )
}
