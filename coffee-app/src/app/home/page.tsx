import { FilterContainer } from '@/components/filter/container'
import { coffeeList } from '../../lib/constants/coffee-list'
import { filterCategories } from '@/lib/constants/filter-categories'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'

export default function HomePage() {
  return (
    <div className="mt-11 ml-11">
      <Stack gap={4} align="left">
        <TextInput color="regular" value={'Your Next Cup'} as="h1" bold />
      </Stack>
      <FilterContainer filterOptions={filterCategories} data={coffeeList} />
    </div>
  )
}
