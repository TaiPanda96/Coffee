import classNames from 'classnames'
import { Inline } from './inline'
import { FilterComponent } from './filter'

export function SearchFilter({}) {
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
      <Inline gap={2} justify="center">
        <FilterComponent
          title="Natural"
          gap={4}
          grow={true}
          filterOptions={[
            { id: '1', label: 'Ethopia' },
            { id: '2', label: 'Columbia' },
            { id: '3', label: 'Kenya' },
            { id: '4', label: 'Brazil' },
            { id: '5', label: 'Costa Rica' },
          ]}
        />
        <div className="border-l-2 border-gray-400 h-12"></div>
        <FilterComponent
          title="Brew Method"
          gap={4}
          grow={true}
          filterOptions={[
            { id: '1', label: 'Filtered' },
            { id: '2', label: 'Espresso' },
            { id: '3', label: 'Cold Brew' },
            { id: '4', label: 'Aeropress' },
            { id: '5', label: 'French Press' },
          ]}
        />
        <div className="border-l-2 border-gray-400 h-12"></div>
        <FilterComponent
          title="Roast"
          gap={4}
          grow={true}
          filterOptions={[
            { id: '1', label: 'Light' },
            { id: '2', label: 'Medium' },
            { id: '3', label: 'Dark' },
          ]}
        />
      </Inline>
    </div>
  )
}
