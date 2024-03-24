import { FilterContainer } from '@/components/filter/container'
import { coffeeList } from '../../lib/constants/coffee-list'
import { filterCategories } from '@/lib/constants/filter-categories'
import { Stack } from '@/components/stack'
import { TextInput } from '@/components/text-input'
import { Inline } from '@/components/inline'

export default function HomePage() {
  return (
    <div className="mt-11 ml-11">
      <Inline justify="between" align="center" gap={4}>
        <Stack gap={4} align="left">
          <Inline justify="left" align="center" gap={4}>
            <img src="/home-logo.png" alt="hero-image" />
            <TextInput color="regular" value="Your Next Cup" as="h1" bold size="xl" />
          </Inline>
        </Stack>
        <TextInput
          color="regular"
          value="How can we make our selections better?"
          as="h2"
          bold
          size="md"
          nowrap
        />
      </Inline>
      <FilterContainer filterOptions={filterCategories} data={coffeeList} />
    </div>
  )
}
