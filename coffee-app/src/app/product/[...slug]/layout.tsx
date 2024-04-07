'use client'
import { Inline } from '@/components/inline'
import { ProductProfiles } from '@/components/product-profile/product-profile-list'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'
import { coffeeList } from '@/lib/constants/coffee-list'
import classNames from 'classnames'

export interface ProductProfilesLayoutProps {
  params: {
    slug: string
  }
}

export default function ProductProfilesLayout({ params }: ProductProfilesLayoutProps) {
  return (
    <Stack gap={8} align="left">
      <Inline justify="between" align="center" gap={4}>
        <img src="/home-logo.png" alt="hero-image" />
        <TextInput
          className={classNames('text-gray-600')}
          value="Your Next Cup..."
          as="h1"
          bold
          size="xl"
        />
        <TextInput color="regular" value="filtered" as="h1" size="lg" bold nowrap />
      </Inline>

      <ProductProfiles products={coffeeList} params={params} />
    </Stack>
  )
}
