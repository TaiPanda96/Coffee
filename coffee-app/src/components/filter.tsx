'use client'
import classNames from 'classnames'
import { ReactNode, useCallback, useState } from 'react'
import { Stack } from './stack'
import { Button } from './button'
import { ListOption } from './list'
import { SectionCard } from './section-card'
import { IoFilterSharp } from 'react-icons/io5'
import { Inline } from './inline'

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

export function FilterComponent({ title, filterOptions }: FilterProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleFilterModal = useCallback(() => {
    setIsModalVisible(!isModalVisible)
  }, [isModalVisible])

  return (
    <div
      className={classNames(
        'flex',
        'rounded-full',
        'border-brand-900',
        'bg-gray-200',
        ' text-brand-900',
        ' hover:text-brand-1400',
        ' hover:bg-gray-300',
        'transition-colors',
      )}
    >
      <Stack gap={6} align="center">
        <Inline gap={4}>
          <Button title={title || 'Filter'} onClick={handleFilterModal}>
            <IoFilterSharp strokeLinecap="round" strokeLinejoin="round" />
          </Button>
        </Inline>
        <br></br>

        {isModalVisible && (
          <div id="dropdown" className="z-8 fixed mt-8 justify-center">
            <SectionCard className="bg-brand-1100 mt-11 justify-center">
              <Stack gap={4}>
                <ol
                  className={classNames(
                    'space-y-3',
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
