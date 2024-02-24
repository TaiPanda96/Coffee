'use client'
import classNames from 'classnames'
import { Inline } from '../inline'
import { FilterOptions } from './filter-options'
import { RadioOptions } from './radio-options'
import { SliderOptions } from './slider-options'
import { Coffee, BrewMethod } from '@/lib/constants/coffee-list'
import React, { useState } from 'react'
import { HorizontalLine } from '../horizontal-line'
import { Item } from '../item'
import { Stack } from '../stack'
import Image from 'next/image'
import { SectionCard } from '../section-card'
import { TextInput } from '../text-input'
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

  const shelves = groupItemsInShelves(coffeeData, coffeeData.length <= 4 ? 1 : 2)

  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'bg-brand-1100',
        'py-12',
      )}
    >
      <Stack gap={6}>
        <SectionCard className="bg-brand-1100 mb-4">
          <Stack gap={8}>
            <Inline gap={6} justify="center" className="mt-6">
              <TextInput
                value={'Discover your next great cup of coffee.'}
                color="brand"
                bold
                as="h1"
                size="lg"
              />
            </Inline>
            <div
              className={classNames(
                'flex',
                'rounded-full',
                'py-0',
                'px-10',
                'text-sm',
                'font-semibold',
              )}
            >
              {filterOptions.map((filter, idx) => (
                <Inline key={idx} gap={2} justify="center">
                  {filter.typeOfFilter === 'radio' && (
                    <RadioOptions
                      title={filter.title}
                      gap={4}
                      grow={true}
                      filterOptions={filter.options.map((option) => ({ label: option }))}
                      onChange={(event) => applyFilter(event, filter.title)}
                    />
                  )}
                  {idx === filterOptions.length - 1 ? null : (
                    <div className=" border-gray-400 h-14"></div>
                  )}
                </Inline>
              ))}
            </div>
          </Stack>
        </SectionCard>
      </Stack>

      <Stack gap={2}>
        <HorizontalLine thickness={20} color="#3A3226" />
        <Inline gap={8} justify="between">
          {shelves.map((shelf: any[], shelfIndex: number) => (
            <React.Fragment key={`shelf-${shelfIndex}`}>
              <Stack gap={8} className="flex-wrap">
                {shelf.map((coffee) => (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Item
                      key={coffee.slug}
                      className="bg-brand-1300 flex-wrap"
                      title={coffee.title}
                      description={coffee.description}
                      slug={coffee.slug}
                      children={
                        <Image
                          src={coffee.image}
                          width={200}
                          height={200}
                          className="rounded-full item:hover"
                          alt={coffee.title}
                        />
                      }
                    />
                  </motion.div>
                ))}
              </Stack>
            </React.Fragment>
          ))}
        </Inline>
      </Stack>
    </div>
  )
}
