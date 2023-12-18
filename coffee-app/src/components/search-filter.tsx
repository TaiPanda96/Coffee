import classNames from 'classnames'
import { Inline } from './inline'
import { FilterComponent } from './filter'

interface SearchFilterProps {
  options: Array<{
    title: string
    options: string[]
  }>
}

export function SearchFilter({ options }: SearchFilterProps) {
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
      {options.map((filter, idx) => (
        <Inline gap={2} justify="center">
          <FilterComponent
            title={filter.title}
            gap={4}
            grow={true}
            filterOptions={filter.options.map((option) => ({
              id: option,
              label: option,
            }))}
          />
          {idx === options.length - 1 ? null : (
            <div className="border-l-2 border-gray-400 h-12"></div>
          )}
        </Inline>
      ))}
    </div>
  )
}
