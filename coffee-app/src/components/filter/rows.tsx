import { Coffee } from '@/lib/constants/coffee-list'
import { motion } from 'framer-motion'
import { Inline } from '../inline'
import { Item } from '../item'
import { Stack } from '../stack'

export function Rows({
  coffeesOnShelf,
}: {
  coffeesOnShelf: Coffee[]
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
                  key={`coffee-${coffee.slug}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Item
                    key={coffee.slug}
                    className="bg-brand-1300 flex-wrap"
                    title={coffee.title}
                    description={coffee.description}
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
