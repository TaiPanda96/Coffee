import { CoffeeDataOutput } from '../../app/home/components/get-coffee-action'
import { Stack } from '../stack'
import { Rows } from './rows'

export function ShelfComponent({ coffeesOnShelf }: { coffeesOnShelf: CoffeeDataOutput[] }) {
  return (
    <Stack gap={6}>
      <Rows coffeesOnShelf={coffeesOnShelf} />
    </Stack>
  )
}
