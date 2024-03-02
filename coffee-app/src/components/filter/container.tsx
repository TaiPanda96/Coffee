'use client'
import classNames from 'classnames'
import { Inline } from '../inline'
import { FilterOptions } from './filter-options'
import { RadioOptions } from './radio-options'
import { SliderOptions } from './slider-options'
import { Coffee } from '@/lib/constants/coffee-list'
import React, { useState } from 'react'
import { HorizontalLine } from '../horizontal-line'
import { Item } from '../item'
import { Stack } from '../stack'
import { motion } from 'framer-motion'
import { camelCase } from 'lodash'

export const availableFilters = {
  radio: RadioOptions,
  list: FilterOptions,
  slider: SliderOptions,
}

export interface FilterContainerProps {
  filterOptions: Array<{
    title: string
    options: string[]
    sliderOptions?: {
      [key: string]: string[]
    }
    typeOfFilter: string
  }>
  data: Coffee[]
}

export function FilterContainer({ filterOptions, data }: FilterContainerProps) {
  const [coffeeData, setCoffeeData] = useState(data)

  const groupItemsInShelves = (items: any[], numberOfShelves: number) => {
    return items.reduce((coffeeShelfArray, item, idx) => {
      const shelfIdx = Math.floor(idx / numberOfShelves)
      if (!coffeeShelfArray[shelfIdx]) {
        coffeeShelfArray[shelfIdx] = []
      }
      coffeeShelfArray[shelfIdx].push(item)
      return coffeeShelfArray
    }, [])
  }

  const applyFilter = (event: { target: { value: string } }, filterTitle: string) => {
    const filterOption = event.target.value

    const filteredData = data.filter((coffee) => {
      if (event.target.value === 'All') return true
      const filterOn = coffee[`${camelCase(filterTitle)}` as keyof Coffee] ?? coffee.brewMethod
      return filterOn === filterOption
    })

    setCoffeeData(filteredData)
  }

  const coffeeShelves = groupItemsInShelves(coffeeData, coffeeData.length <= 4 ? 1 : 2)

  return (
    <div className={classNames('flex', 'justify-center', 'bg-brand-1500', 'py-12')}>
      <Stack gap={6}>
        <Stack gap={8}>
          <Inline gap={4} justify="center" className="mt-6">
            <div
              className={classNames(
                'bg-brand-1500',
                'shadow-md brown-shadow',
                'flex',
                'py-0',
                'px-10',
                'text-sm',
                'font-semibold',
              )}
            >
              {filterOptions.map((filter, idx) => (
                <Inline key={idx} gap={2} justify="center">
                  <React.Fragment key={idx}>
                    {filter.typeOfFilter === 'radio' && (
                      <RadioOptions
                        title={filter.title}
                        gap={4}
                        grow={true}
                        filterOptions={filter.options.map((option) => ({ label: option }))}
                        onChange={(event) => applyFilter(event, filter.title)}
                      />
                    )}
                    {idx < filterOptions.length - 1 && (
                      <div
                        style={{
                          height: '50px',
                          width: '1px',
                          backgroundColor: '#000000',
                          alignSelf: 'center',
                        }}
                      />
                    )}
                  </React.Fragment>
                </Inline>
              ))}
            </div>
          </Inline>

          <Inline justify="between">
            {coffeeShelves.map((coffeesOnShelf: Coffee[], idx: React.Key | null | undefined) => {
              return <ShelfComponent key={idx} coffeesOnShelf={coffeesOnShelf} />
            })}
          </Inline>
        </Stack>
        <HorizontalLine thickness={8} color="#deb887" />
      </Stack>
    </div>
  )
}

export function ShelfComponent({ coffeesOnShelf }: { coffeesOnShelf: Coffee[] }) {
  return (
    <Stack gap={6}>
      <Inline justify="between">
        <Rows coffeesOnShelf={coffeesOnShelf} />
      </Inline>
    </Stack>
  )
}

export function Rows({ coffeesOnShelf }: { coffeesOnShelf: Coffee[] }) {
  return (
    <div className="shelf-container">
      <Stack gap={2} className="flex-wrap">
        <Inline justify="between">
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
