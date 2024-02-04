import { TopNavigationComponent, Breadcrumb } from '@/components/top-navigation'
import { FilterContainer } from '@/components/filter/container'
import { coffeeList } from '../lib/constants/coffee-list'
import React from 'react'
import { filterCategories } from '@/lib/constants/filter-categories'

export const tabs: Breadcrumb[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/product' },
  { label: 'Our Story', href: '/about' },
]

export default function HomePage() {
  return (
    <div>
      <TopNavigationComponent breadcrumbs={tabs} />
      <FilterContainer filterOptions={filterCategories} data={coffeeList} />
    </div>
  )
}
