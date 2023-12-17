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
  price?: string
  count?: string
  children?: React.ReactNode
}

export function Item({ className, title, description, children }: ItemProps) {
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
            <TextInput value={description} color="light" as="h3" />
            <Button
              className={classNames(
                'flex',
                'bottom-2',
                'right-2',
                'flex',
                'rounded-full',
                'border',
                'border-brand-900',
                'bg-black',
                'text-brand-1100',
                'hover:text-white',
                'hover:bg-brand-1400',
                'transition-colors',
                'px-2.5',
                'py-2.5',
                'text-sm',
                'font-semibold',
              )}
            >
              <Inline justify="center" align="center">
                <TextInput value="Read Me" color="regular" as="span" size="sm" />
              </Inline>
            </Button>
          </Stack>
        </Stack>
      </SectionCard>
    </div>
  )
}
