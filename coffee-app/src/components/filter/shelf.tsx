import { Coffee } from '@/lib/constants/coffee-list'
import { Stack } from '../stack'
import { Rows } from './rows'

export function ShelfComponent({ coffeesOnShelf }: { coffeesOnShelf: Coffee[] }) {
  return (
    <Stack gap={6}>
      <Rows coffeesOnShelf={coffeesOnShelf} />
    </Stack>
  )
}
