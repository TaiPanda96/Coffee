import { TopNavigationComponent, Breadcrumb } from '@/components/top-navigation'
import { Inline } from '@/components/inline'
import { SectionCard } from '@/components/section-card'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'
import { Item } from '@/components/item'
import Image from 'next/image'
import { HorizontalLine } from '@/components/horizontal-line'
import { FilterContainer } from '@/components/filter/filter-container'
import { coffeeList } from '../lib/constants/coffee-list'
import { filterCategories } from '../lib/constants/filter-categories'

export const tabs: Breadcrumb[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/product' },
  { label: 'Our Story', href: '/about' },
]

export default function HomePage() {
  return (
    <>
      <TopNavigationComponent breadcrumbs={tabs} />
      <Stack gap={6}>
        <SectionCard className="bg-brand-1100">
          <Stack gap={8}>
            <Inline gap={6} justify="center" className="mt-6">
              <TextInput
                value={'Discover your next great cup of coffee.'}
                color="brand"
                as="h1"
                size="lg"
              />
            </Inline>
            <div className="flex flex-col items-center justify-center">
              <FilterContainer filterOptions={filterCategories} />
            </div>
          </Stack>
        </SectionCard>
      </Stack>
      <br></br>

      <div className=" bg-brand-1100 flex flex-col justify-center items-center">
        <div className="grid grid-flow-row gap-8 @2xl:grid-cols-3 justify-center">
          <HorizontalLine thickness={25} color="#3A3226" />
          <Inline gap={8} justify="between">
            {coffeeList.map((coffee) => {
              return (
                <Item
                  className="bg-brand-1300"
                  title={coffee.title}
                  description={coffee.description}
                  slug={coffee.slug}
                  children={
                    <Image
                      src={coffee.image}
                      width={200}
                      height={200}
                      className="rounded-full"
                      alt={''}
                    />
                  }
                />
              )
            })}
          </Inline>
        </div>
      </div>
    </>
  )
}
