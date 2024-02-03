import { useCallback, useState } from 'react'
import { Stack } from '../stack'
import { FilterOptionProps } from './filter-options'
import classNames from 'classnames'
import { MenuOptions } from './menu-options'
import { Button } from '../button'
import { IoFilterSharp } from 'react-icons/io5'
import { SectionCard } from '../section-card'

export function RadioOptions({
  title,
  children,
  className,
  gap,
  grow,
  filterOptions,
  onFilter,
}: FilterOptionProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleRadioOptionsVisibility = useCallback(() => {
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
      <Stack gap={2}>
        <Button title={title || 'Filter'} onClick={handleRadioOptionsVisibility}>
          <IoFilterSharp strokeLinecap="round" strokeLinejoin="round" />
        </Button>
        <br></br>
        {isModalVisible && (
          <div className="z-10 mr-2 fixed mt-8 justify-center">
            <SectionCard className="bg-brand-1100 mt-11 fixed justify-center flex">
              <Stack gap={2}>
                <ol
                  className={classNames(
                    'space-y-1',
                    'text-sm',
                    'align-middle',
                    'aria-labelledby="dropdownDefault"',
                  )}
                >
                  {filterOptions.map((input) => (
                    <MenuOptions label={input.label} />
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
