import { SetStateAction, useCallback, useState } from 'react'
import { Stack } from '../stack'
import { FilterOptionProps } from './filter-options'
import classNames from 'classnames'
import { Button } from '../button'
import { IoFilterSharp } from 'react-icons/io5'
import { SectionCard } from '../section-card'
import { Inline } from '../inline'
import { TextInput } from '../text-input'

export interface SliderOptionsProps {
  min: number
  max: number
  step?: number
  filterOptions: Array<{
    label: string
    description?: string
  }>
}

export const Slider = ({ filterOptions }: SliderOptionsProps) => {
  return (
    <div className="flex flex-col space-y-6 p-6 w-80">
      <TextInput value="On the first sip" color="regular" as="span" size="sm" nowrap />
      <input type="range" min="1" max="6" step="1" />
      <ul className="flex justify-between w-full ">
        {filterOptions.map((input) => (
          <Stack gap={2}>
            <li>
              <Inline justify="between" align="center" gap={6}>
                <TextInput value={input.label} color="regular" as="span" size="sm" nowrap />
              </Inline>
            </li>
          </Stack>
        ))}
      </ul>
    </div>
  )
}

export function SliderOptions({ title, filterOptions }: FilterOptionProps) {
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
      <Stack gap={2}>
        <Button title={title || 'Filter'} onClick={handleFilterModal}>
          <IoFilterSharp strokeLinecap="round" strokeLinejoin="round" />
        </Button>
        <br></br>
        {isModalVisible && (
          <div className="z-11 fixed mt-8 justify-center">
            <SectionCard className="bg-brand-1100 mt-11 justify-center flex">
              <Stack gap={2}>
                <Slider min={1} max={filterOptions.length} step={1} filterOptions={filterOptions} />
              </Stack>
            </SectionCard>
          </div>
        )}
      </Stack>
    </div>
  )
}
