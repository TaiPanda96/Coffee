import React from 'react'
import classNames from 'classnames'
import { Stack } from './stack'
import styles from './item.module.css'
import Link from 'next/link'
import { HorizontalLine } from './horizontal-line'
import { CoffeeDataOutput } from './actions/get-coffee-action'

export interface ItemProps {
  key: string
  className?: string
  title: string
  description?: string
  price?: string
  count?: string
  coffee?: CoffeeDataOutput
  slug: string
}

export function Item({ slug, coffee }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Stack gap={0.5}>
        <Link href={`/product/${slug}`}>
          <img
            src={coffee?.img}
            width={200}
            height={200}
            className={classNames(styles.itemHover, 'bg-transparent')}
          />
          <HorizontalLine thickness={14} color="#e4b762" />
        </Link>
      </Stack>
    </div>
  )
}
