'use client'
import classNames from 'classnames'
import { Inline } from '../inline'
import { FilterOptions } from './filter-options'
import { RadioOptions } from './radio-options'
import { SliderOptions } from './slider-options'
import { Coffee } from '@/lib/constants/coffee-list'
import React, { useState } from 'react'
import { Stack } from '../stack'
import { motion } from 'framer-motion'
import { camelCase } from 'lodash'
import { ShelfComponent } from './shelf'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const availableFilters = {
  radio: RadioOptions,
  list: FilterOptions,
  slider: SliderOptions,
}

export interface FilterContainerProps {
  filterOptions: Array<{
    description: string
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
    <Stack gap={8}>
      <Inline justify="center" className="mt-6">
        <div
          className={classNames(
            'bg-brand-1500',
            'shadow-xl brown-shadow',
            'flex',
            'px-8',
            'text-sm',
            'font-semibold',
          )}
        >
          {filterOptions.map((filter, idx) => (
            <Inline key={idx} justify="left">
              <React.Fragment key={idx}>
                {filter.typeOfFilter === 'radio' && (
                  <RadioOptions
                    title={filter.title}
                    description={filter.description || ''}
                    gap={4}
                    grow={true}
                    filterOptions={filter.options.map((option) => ({ label: option }))}
                    onChange={(event) => applyFilter(event, filter.title)}
                  />
                )}
                {idx < filterOptions.length - 1 && (
                  <div
                    className="mr-4 mt-2 mb-2 bg-brand-900"
                    style={{
                      height: '50px',
                      width: '1px',
                      backgroundColor: '#000000',
                      alignSelf: 'center',
                    }}
                  />
                )}

                {idx === filterOptions.length - 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={classNames(
                      'flex',
                      'rounded-full',
                      'px-2',
                      'py-2',
                      'bg-brand-1800',
                      'border-brand-900',
                      ' text-brand-900',
                      ' hover:text-brand-1400',
                      'transition-colors',
                    )}
                  >
                    <Stack gap={0.5} align="center">
                      <FontAwesomeIcon
                        icon={faSearch}
                        size="2x"
                        style={{
                          alignSelf: 'center',
                          cursor: 'pointer',
                          marginLeft: '2.5px',
                          marginRight: '2.5px',
                        }}
                      />
                    </Stack>
                  </motion.button>
                )}
              </React.Fragment>
            </Inline>
          ))}
        </div>
      </Inline>

      <Inline className="mt-6" justify="center">
        {coffeeShelves.map((coffeesOnShelf: Coffee[], idx: React.Key | null | undefined) => (
          <React.Fragment key={idx}>
            <ShelfComponent coffeesOnShelf={coffeesOnShelf} />
          </React.Fragment>
        ))}
      </Inline>
    </Stack>
  )
}
