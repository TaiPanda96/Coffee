import React from 'react'
import classNames from 'classnames'
import { Inline } from './inline'
import { SectionCard } from './section-card'
import { Stack } from './stack'
import { TextInput } from './text-input'
import Link from 'next/link'

interface ItemProps {
  className?: string
  title: string
  description?: string
  price?: string
  count?: string
  children?: React.ReactNode
  slug: string
}

import styles from './item.module.css'

export function Item({ className, title, children, slug }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionCard
        className={classNames(
          'rounded',
          'px-4',
          'py-6',
          'shadow-md brown-shadow',
          className,
          styles.itemHover,
        )}
      >
        <Stack gap={8} align="center">
          <Inline justify="center">
            <TextInput value={title} color="inverted" as="h1" bold />
          </Inline>
          {children}
          <Link
            href={`/product/${slug}`}
            className={classNames(
              'flex',
              'rounded-full',
              'text-white',
              'justify-center',
              'border-gray',
              'transition-colors',
              'px-16',
              'py-3',
              'mt-3',
              'text-sm',
              'font-semibold',
              'hover:bg-gray-100',
              'hover:text-brand-700',
              'bg-brand-1400',
            )}
          >
            <Inline justify="center" align="center">
              <TextInput value={'Tell Me More'} color="regular" as="span" bold nowrap />
            </Inline>
          </Link>
        </Stack>
      </SectionCard>
    </div>
  )
}
