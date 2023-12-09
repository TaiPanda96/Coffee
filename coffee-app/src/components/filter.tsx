'use client'

import classNames from 'classnames'
import { ReactNode, useCallback, useState } from 'react'
import { Stack } from './stack'
import { Button } from './button'
import { ListOption } from './list'
import { SectionCard } from './section-card'

interface FilterProps {
  title?: string
  children?: ReactNode
  className?: string
  gap?: number
  grow?: boolean
  filterOptions: Array<{
    id: string
    label: string
  }>
}

export function FilterComponent({ title, className, filterOptions }: FilterProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleFilterModal = useCallback(() => {
    setIsModalVisible(!isModalVisible)
  }, [isModalVisible])

  return (
    <div
      className={classNames('flex', 'items-center', 'justify-center', 'p-8', {
        className,
      })}
    >
      <Stack gap={6}>
        <Button title={title || 'Filter'} onClick={handleFilterModal}>
          <svg
            className="w-4 h-4 ml-2 align-baseline"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Button>
        <br></br>

        {isModalVisible && (
          <div id="dropdown" className="z-10 fixed mt-12 justify-center">
            <SectionCard className="bg-brand-1100 mt-6">
              <Stack gap={4}>
                <ol
                  className={classNames(
                    'space-y-2',
                    'text-sm',
                    'aria-labelledby="dropdownDefault"',
                  )}
                >
                  {filterOptions.map((input) => (
                    <ListOption key={input.id} id={input.id} label={input.label} />
                  ))}
                </ol>
              </Stack>
            </SectionCard>
          </div>
        )}
      </Stack>
    </div>
  )
}
