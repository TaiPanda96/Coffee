'use client'
import { Stack } from '../stack'
import { Inline } from '../inline'
import { TextInput } from '../text-input'
import { toTitleCase } from './profile-list'
import { Coffee } from '../../lib/constants/coffee-list'

export interface ProductDetailProps {
  children?: React.ReactNode
  className?: string
  product: Coffee | undefined
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Stack gap={8}>
      <Inline gap={2} justify="between">
        <TextInput
          value={toTitleCase(product?.slug ?? 'Rooster')}
          color="regular"
          as="span"
          size="lg"
        />
      </Inline>

      <Inline gap={2} className="border-y-2 border-brand-700">
        <img src={'/star.png'} className="flex-grow min-h-[20px] max-w-[40px] max-h-[40px]"></img>
        <img
          src={'/star.png'}
          className="flex-grow min-w-[20px] min-h-[20px] max-w-[40px] max-h-[40px]"
        ></img>
        <img
          src={'/star.png'}
          className="flex-grow min-w-[20px] min-h-[20px] max-w-[40px] max-h-[40px]"
        ></img>
      </Inline>

      <Inline gap={8} justify="between">
        <TextInput value={'Price:'} color="regular" as="span" size="sm" bold />
        <TextInput value={'$12.75'} color="regular" as="span" size="sm" bold />
      </Inline>
      <Inline gap={8} justify="between">
        <TextInput value={'Quantity:'} color="regular" as="span" size="sm" bold />
        <TextInput value={'300 g'} color="regular" as="span" size="sm" bold />
      </Inline>

      <TextInput
        value={
          'This is a description of the product. It is a very good product. You should buy it.'
        }
        color="regular"
        as="span"
        nowrap
        size="sm"
        bold
      />
    </Stack>
  )
}
