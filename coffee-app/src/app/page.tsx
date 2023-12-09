'use-client'

import { TopNavigationComponent, Breadcrumb } from '@/components/top-navigation'
import { FilterComponent } from '@/components/filter'
import { Inline } from '@/components/inline'
import { SectionCard } from '@/components/section-card'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'

export default function HomePage() {
  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/promotions' },
    { label: 'Our Story', href: '/about-us' },
  ]

  return (
    <>
      <TopNavigationComponent breadcrumbs={breadcrumbs} heading="Your Next Cup" />
      <Stack gap={6} className="justify-stretch @container">
        <SectionCard>
          <Stack gap={4}>
            <Inline gap={4} justify="center" className="mt-6">
              <TextInput
                value={'Discover your next great cup of coffee.'}
                color="inverted-light"
                as="h1"
              />
            </Inline>
            <Inline gap={4} justify="center">
              <FilterComponent
                title="Region"
                className="bg-brand-300 text-white"
                gap={4}
                grow={true}
                filterOptions={[
                  { id: '1', label: 'Ethopia' },
                  { id: '2', label: 'Columbia' },
                  { id: '3', label: 'Kenya' },
                  { id: '4', label: 'Brazil' },
                  { id: '5', label: 'Costa Rica' },
                ]}
              />
              <FilterComponent
                title="Brew Method"
                className="bg-brand-300 text-white"
                gap={4}
                grow={true}
                filterOptions={[
                  { id: '1', label: 'Filtered' },
                  { id: '2', label: 'Espresso' },
                  { id: '3', label: 'Cold Brew' },
                  { id: '4', label: 'Aeropress' },
                  { id: '5', label: 'French Press' },
                ]}
              />
              <FilterComponent
                title="Roast Level"
                className="bg-brand-300 text-white"
                gap={4}
                grow={true}
                filterOptions={[
                  { id: '1', label: 'Light' },
                  { id: '2', label: 'Medium' },
                  { id: '3', label: 'Dark' },
                ]}
              />
            </Inline>
          </Stack>
        </SectionCard>
      </Stack>
      <br />
      <br />
      <Stack gap={6} className="justify-stretch @container">
        <div className="grid grid-flow-row gap-8 @2xl:grid-cols-3 justify-center">
          <Inline gap={8} justify="between">
            <SectionCard className="border-brand-600">
              <Stack gap={4}>
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
            <SectionCard>
              <Stack gap={4} className="justify-stretch @container">
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
            <SectionCard>
              <Stack gap={4} className="justify-stretch @container">
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
          </Inline>
          <Inline gap={8} justify="between">
            <SectionCard>
              <Stack gap={4} className="justify-stretch @container">
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
            <SectionCard>
              <Stack gap={4} className="justify-stretch @container">
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
            <SectionCard>
              <Stack gap={4} className="justify-stretch @container">
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
                <TextInput value={'Ethopia'} color="inverted-light" as="h1" />
              </Stack>
            </SectionCard>
          </Inline>
        </div>
      </Stack>
    </>
  )
}
