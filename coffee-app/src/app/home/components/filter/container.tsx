'use client'

import classNames from 'classnames'
import { Inline } from '../../../../components/inline'
import { FilterOptions } from './filter-options'
import { RadioOptions } from './radio-options'
import { SliderOptions } from './slider-options'
import React, { useState } from 'react'
import { Stack } from '../../../../components/stack'
import { motion } from 'framer-motion'
import { camelCase } from 'lodash'
import { ShelfComponent } from './shelf'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CoffeeDataOutput } from '../get-coffee-action'

export const availableFilters = {
  radio: RadioOptions,
  list: FilterOptions,
  slider: SliderOptions,
}

export type FilterType = 'radio' | 'list' | 'slider'

export type FilterOptions = {
  key: 'brewMethod' | 'roastLevel' | 'tasteNotes'
  title: string
  description?: string
  options: string[]
  sliderOptions?: {
    [key: string]: string[]
  }
  typeOfFilter: FilterType
}

export interface FilterContainerProps {
  data: CoffeeDataOutput[]
  filters: FilterOptions[]
}

export async function FilterContainer({ data, filters }: FilterContainerProps) {
  const [coffeeData, setCoffeeData] = useState(data)

  const groupItemsInShelves = (items: any[], numberOfShelves: number): CoffeeDataOutput[][] => {
    return items.reduce(
      (
        coffeeShelfArray: {
          [x: string]: CoffeeDataOutput[]
        },
        item,
        idx,
      ) => {
        const shelfIdx = Math.floor(idx / numberOfShelves)
        if (!coffeeShelfArray[shelfIdx]) {
          coffeeShelfArray[shelfIdx] = []
        }
        coffeeShelfArray[shelfIdx].push(item)
        return coffeeShelfArray
      },
      [],
    )
  }

  const applyFilter = (event: { target: { value: string } }, filterTitle: string) => {
    const filterOption = event.target.value as string

    const filteredData = data.filter((coffee) => {
      if (event.target.value === 'All') return true
      const key = camelCase(filterTitle) as keyof CoffeeDataOutput
      const filterOn = coffee[key]
      return filterOn === filterOption ?? 'brewMethod'
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
          {filters.map((filter, idx) => (
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
                {idx < filters.length - 1 && (
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

                {idx === filters.length - 1 && (
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
        {coffeeShelves.map(
          (coffeesOnShelf: CoffeeDataOutput[], idx: React.Key | null | undefined) => (
            <React.Fragment key={idx}>
              <ShelfComponent coffeesOnShelf={coffeesOnShelf} />
            </React.Fragment>
          ),
        )}
      </Inline>
    </Stack>
  )
}
