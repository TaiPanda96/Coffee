'use client'

import classNames from 'classnames'
import { Inline } from '../../../components/inline'
import { Navigation } from '../../../components/navigation'
import { ProfileList } from '../components/profile-list'
import { Stack } from '../../../components/stack'
import { TextInput } from '../../../components/text-input'
import { coffeeList } from '../../../lib/constants/coffee-list'

export interface ProductProfilesLayoutProps {
  params: {
    slug: string
  }
}

export default function ProductProfilesLayout({ params }: ProductProfilesLayoutProps) {
  return (
    <>
      <div className="fixed top-10 left-[-0.025%]">
        <Navigation breadcrumbs={[{ label: 'Return To Coffee Shelf', href: '/' }]} />
      </div>
      <Stack gap={8} align="center">
        <Inline justify="between" align="center" gap={4}>
          <img src="/home-logo.png" alt="hero-image" />
          <TextInput
            className={classNames('text-gray-600')}
            value="Your Next Cup Shortlist"
            as="h1"
            bold
            size="xl"
          />
        </Inline>
        <ProfileList products={coffeeList} params={params} />
      </Stack>
    </>
  )
}
