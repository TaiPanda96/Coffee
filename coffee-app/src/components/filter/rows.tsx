import { motion } from 'framer-motion'
import { Inline } from '../inline'
import { Item } from '../item'
import { Stack } from '../stack'
import { CoffeeDataOutput } from '../../app/home/components/get-coffee-action'

export function Rows({
  coffeesOnShelf,
}: {
  coffeesOnShelf: CoffeeDataOutput[]
  includeShelfIndicator?: boolean
}) {
  return (
    <div className="shelf-container">
      <Stack gap={2} className="flex-wrap">
        <Inline>
          <div className="shelf-container">
            <Stack gap={8} className="flex-wrap">
              {coffeesOnShelf.map((coffee) => (
                <motion.div
                  key={`${coffee.slug}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Item
                    key={coffee.slug}
                    className="bg-brand-1300 flex-wrap"
                    title={coffee.name}
                    description={coffee.roaster}
                    slug={coffee.slug}
                    coffee={coffee}
                  />
                </motion.div>
              ))}
            </Stack>
          </div>
        </Inline>
      </Stack>
    </div>
  )
}
