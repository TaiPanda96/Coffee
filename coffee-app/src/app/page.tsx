import { TopNavigationComponent, Breadcrumb } from '@/components/top-navigation'
import { FilterComponent } from '@/components/filter'
import { Inline } from '@/components/inline'
import { SectionCard } from '@/components/section-card'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'
import { Item } from '@/components/item'
import Image from 'next/image'

export default function HomePage() {
  const tabs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/promotions' },
    { label: 'Our Story', href: '/about-us' },
  ]

  return (
    <>
      <TopNavigationComponent breadcrumbs={tabs} />
      <Stack gap={6} className="justify-stretch @container">
        <SectionCard className="bg-brand-1100">
          <Stack gap={4}>
            <Inline gap={4} justify="center" className="mt-6">
              <TextInput
                value={'Discover your next great cup of coffee.'}
                color="brand"
                as="h1"
                size="lg"
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
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
          </Inline>
          <Inline gap={8} justify="between">
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
            <Item
              className="bg-brand-1100"
              title="Ethiopia Yirgacheffe"
              description="Fruity, Floral, Bright"
              price="$14.99"
              children={
                <Image
                  src="/rooster-coffee.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt={''}
                />
              }
            />
          </Inline>
        </div>
      </Stack>
    </>
  )
}
