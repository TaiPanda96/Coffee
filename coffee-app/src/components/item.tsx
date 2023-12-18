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
  description?: string
  price?: string
  count?: string
  children?: React.ReactNode
}

export function Item({ className, title, children }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionCard
        className={classNames('rounded', 'px-4', 'py-6', 'shadow-md brown-shadow', className)}
      >
        <Stack gap={8}>
          <Inline justify="center">
            <TextInput value={title} color="regular" as="h1" bold />
          </Inline>
          {children}
          <Button
            className={classNames(
              'text-white',
              'bg-brand-1400',
              'hover:text-brand-1100',
              'hover:bg-brand-800',
            )}
          >
            <Inline justify="center" align="center">
              <TextInput value="Read Me" color="regular" as="span" size="sm" />
            </Inline>
          </Button>
        </Stack>
      </SectionCard>
    </div>
  )
}
