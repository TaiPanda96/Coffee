'use client'
import classNames from 'classnames'
import { Stack } from '../stack'
import { Inline } from '../inline'
import { TextInput } from '../text-input'
import { Button } from '../button'
import { Badge } from '../badge'
import { Coffee } from '@/lib/constants/coffee-list'
import { toTitleCase } from './product-profile-list'

export interface ProductContainerProps {
  children?: React.ReactNode
  className?: string
  product: Coffee | undefined
}

export function ProductDetails({ product, children }: ProductContainerProps) {
  return (
    <Stack gap={6} className="flex-col p-11">
      <Inline
        gap={8}
        justify="between"
        className={classNames(
          'flex flex-col items-center',
          'flex-grow',
          'p-8',
          'border-2 border-gray-700',
        )}
      >
        {children}
        <Stack gap={8} align="left">
          <Inline gap={8} justify="between">
            <TextInput
              value={toTitleCase(product?.slug ?? 'Rooster')}
              color="regular"
              as="span"
              size="lg"
            />
          </Inline>

          <Inline gap={4} justify="between">
            <img src={`/star.png`} />
            <img src={`/star.png`} />
            <img src={`/star.png`} />
          </Inline>

          <Inline gap={4} justify="between">
            <Badge size="sm" rounded label="$12.99" />
            <span>|</span>
            <Badge size="sm" rounded label="in stock" />
          </Inline>

          <TextInput
            value={'What they say about this coffee'}
            color="regular"
            as="span"
            size="sm"
          />
          <TextInput
            value={`"This coffee is a medium-dark roast, with a rich, full-bodied flavor and a smooth finish. It’s a blend of 100% Arabica beans from Central and South America, and it’s certified organic and fair trade."`}
            color="inverted-light"
            as="span"
            size="sm"
          />

          <Inline justify="between" grow className="gap-2">
            <TextInput value={'Details'} color="regular" as="span" size="sm" bold />
          </Inline>

          <Stack gap={8} align="left">
            <Inline gap={8} justify="between">
              <TextInput value={`Origin`} color="regular" as="span" size="sm" />
              <Badge size="sm" rounded label="Brazil" />
            </Inline>
            <Inline gap={8} justify="between">
              <TextInput value={`Process`} color="regular" as="span" size="sm" />
              <Badge size="sm" rounded label="Washed" />
            </Inline>
            <Inline gap={8} justify="between">
              <TextInput value={`Bag Sizes`} color="regular" as="span" size="sm" />
              <Badge size="sm" rounded label="250g" />
              <Badge size="sm" rounded label="1kg" />
            </Inline>
          </Stack>

          <Stack gap={8} align="center">
            <Button
              className={classNames(
                'hover:bg-gray-400',
                'bg-brand-1100',
                'text-black',
                'px-8',
                'justify-items-center',
              )}
              title="Purchase Now"
            />
          </Stack>
        </Stack>
      </Inline>
    </Stack>
  )
}
