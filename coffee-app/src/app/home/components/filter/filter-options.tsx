import classNames from 'classnames'
import { useState, useCallback, ReactNode } from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import { Button } from '../../../../components/button'
import { ListOption } from './list-options'
import { SectionCard } from '../../../../components/section-card'
import { Stack } from '../../../../components/stack'

export interface FilterOptionProps {
  title?: string
  description?: string
  children?: ReactNode
  className?: string
  gap?: number
  grow?: boolean
  filterOptions: Array<{
    label: string
    description?: string
  }>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function FilterOptions({ title, children, filterOptions, onChange }: FilterOptionProps) {
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
        <Button title={title || 'Filter'} onClick={handleFilterModal}>
          <IoFilterSharp strokeLinecap="round" strokeLinejoin="round" />
        </Button>
        <br></br>

        {isModalVisible && (
          <div id="dropdown" className="z-11 fixed mt-8 justify-center">
            {children ? (
              children
            ) : (
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
                      <ListOption label={input.label} />
                    ))}
                  </ol>
                </Stack>
              </SectionCard>
            )}
          </div>
        )}
      </Stack>
    </div>
  )
}
