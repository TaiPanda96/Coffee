import { FilterContainer } from '../../components/filter/container'
import { getCoffeeAction } from './actions/get-coffee-action'

export async function CoffeeSection() {
  const { data, filters } = await getCoffeeAction()
  return <FilterContainer data={data} filters={filters} />
}
