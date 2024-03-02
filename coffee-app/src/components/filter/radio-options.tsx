import { useCallback, useState } from 'react'
import { Stack } from '../stack'
import { FilterOptionProps } from './filter-options'
import classNames from 'classnames'
import { MenuOptions } from './menu-options'
import { Button } from '../button'
import { SectionCard } from '../section-card'

export function RadioOptions({ title, filterOptions, onChange }: FilterOptionProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleRadioOptionsVisibility = useCallback(() => {
    setIsModalVisible(!isModalVisible)
  }, [isModalVisible])

  return (
    <div
      className={classNames(
        'flex',
        'bg-brand-1500',
        ' text-brand-900',
        ' hover:bg-gray-300',
        'transition-colors',
      )}
    >
      <Stack gap={2}>
        <Button title={title || 'Filter'} onClick={handleRadioOptionsVisibility} />
        <br></br>
        {isModalVisible && (
          <div className="z-10 mr-2 fixed mt-8 justify-center">
            <SectionCard className="bg-brand-1500 mt-11 fixed justify-center flex">
              <Stack gap={2}>
                <ol
                  className={classNames(
                    'space-y-1',
                    'text-sm',
                    'align-middle',
                    'aria-labelledby="dropdownDefault"',
                  )}
                >
                  {filterOptions
                    .concat({
                      label: 'All',
                      description: 'All',
                    })
                    .map((input) => (
                      <MenuOptions
                        label={input.label}
                        value={input.label}
                        onChange={(event) => {
                          if (onChange) {
                            onChange(event)
                          }
                          setIsModalVisible(false)
                        }}
                      />
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
