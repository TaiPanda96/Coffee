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
import React from 'react'
import { filterCategories } from '@/lib/constants/filter-categories'

export const tabs: Breadcrumb[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/product' },
  { label: 'Our Story', href: '/about' },
]

export const numberOfShelves = 2

export default function HomePage() {
  const groupItemsPerShelf = (items: any[], numberOfShelves: number) => {
    return items.reduce((coffeeShelfArray, item, idx) => {
      const shelfIdx = Math.floor(idx / numberOfShelves)
      if (!coffeeShelfArray[shelfIdx]) {
        coffeeShelfArray[shelfIdx] = []
      }
      coffeeShelfArray[shelfIdx].push(item)
      return coffeeShelfArray
    }, [])
  }

  const shelves = groupItemsPerShelf(coffeeList, numberOfShelves)
  return (
    <div>
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
              <FilterContainer filterOptions={filterCategories} data={coffeeList} />
            </div>
          </Stack>
        </SectionCard>
      </Stack>
      <br></br>
      <Stack gap={2}>
        <HorizontalLine thickness={20} color="#3A3226" />
        <Inline gap={2} justify="between">
          {shelves.map((shelf: any[], shelfIndex: number) => (
            <React.Fragment key={`shelf-${shelfIndex}`}>
              <Stack gap={4} className="flex-wrap">
                {shelf.map((coffee) => (
                  <Item
                    key={coffee.slug}
                    className="bg-brand-1300 flex-wrap"
                    title={coffee.title}
                    description={coffee.description}
                    slug={coffee.slug}
                    children={
                      <Image
                        src={coffee.image}
                        width={200}
                        height={200}
                        className="rounded-full item:hover"
                        alt={coffee.title}
                      />
                    }
                  />
                ))}
              </Stack>
            </React.Fragment>
          ))}
        </Inline>
      </Stack>
    </div>
  )
}
