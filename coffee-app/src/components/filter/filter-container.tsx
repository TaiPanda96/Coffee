'use client'
import classNames from 'classnames'
import { Inline } from '../inline'
import { FilterOptions } from './filter-options'
import { RadioOptions } from './radio-options'
import { SliderOptions } from './slider-options'

interface FilterContainerProps {
  filterOptions: Array<{
    title: string
    options: string[]
    sliderOptions?: {
      [key: string]: string[]
    }
    typeOfFilter: string
  }>
}

export const availableFilters = {
  radio: RadioOptions,
  list: FilterOptions,
  slider: SliderOptions,
}

export function FilterContainer({ filterOptions }: FilterContainerProps) {
  return (
    <div
      className={classNames(
        'flex',
        'rounded-full',
        'border-gray',
        'bg-gray-200',
        'transition-colors',
        'px-10',
        'text-sm',
        'font-semibold',
      )}
    >
      {filterOptions.map((filter, idx) => (
        <Inline gap={2} justify="center">
          {filter.typeOfFilter === 'radio' && (
            <RadioOptions
              title={filter.title}
              gap={4}
              grow={true}
              filterOptions={filter.options.map((option) => ({ label: option }))}
            />
          )}
          {filter.typeOfFilter === 'list' && (
            <FilterOptions
              title={filter.title}
              gap={4}
              grow={true}
              filterOptions={filter.options.map((option) => ({ label: option }))}
            />
          )}
          {filter.typeOfFilter === 'scale' && (
            <SliderOptions
              min={1}
              gap={4}
              grow={true}
              title={filter.title}
              filterOptions={[]}
              sliderOptions={filter.sliderOptions}
            />
          )}

          {idx === filterOptions.length - 1 ? null : (
            <div className="border-l-2 border-gray-400 h-12"></div>
          )}
        </Inline>
      ))}
    </div>
  )
}
