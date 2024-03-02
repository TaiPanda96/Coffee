import React from 'react'
import classNames from 'classnames'
import { Inline } from './inline'
import { Stack } from './stack'
import { TextInput } from './text-input'
import styles from './item.module.css'
import { Coffee } from '@/lib/constants/coffee-list'
import Link from 'next/link'

export interface ItemProps {
  key: string
  className?: string
  title: string
  description?: string
  price?: string
  count?: string
  coffee?: Coffee
  slug: string
}

export function Item({ slug, title, coffee }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/product/${slug}`}>
        <img
          src={coffee?.image}
          width={200}
          height={200}
          className={classNames(styles.itemHover)}
        />
      </Link>
    </div>
  )
}
