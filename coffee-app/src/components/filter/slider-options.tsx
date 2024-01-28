import { useCallback, useState } from 'react'
import { Stack } from '../stack'
import classNames from 'classnames'
import { Button } from '../button'
import { IoFilterSharp } from 'react-icons/io5'
import { SectionCard } from '../section-card'
import { Slider, SliderOptionsProps } from './slider'

export function SliderOptions({ title, sliderOptions, filterOptions }: SliderOptionsProps) {
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
          <div className="z-10 mr-2 fixed mt-8 justify-center">
            <SectionCard className="bg-brand-1100 mt-11 justify-center flex rounded-sm">
              <Stack gap={2}>
                {filterOptions.length ? (
                  <Slider
                    min={1}
                    max={filterOptions.length}
                    step={1}
                    filterOptions={filterOptions}
                  />
                ) : (
                  <Slider
                    color="regular"
                    min={1}
                    step={1}
                    sliderOptions={sliderOptions}
                    filterOptions={[]}
                  />
                )}
              </Stack>
            </SectionCard>
          </div>
        )}
      </Stack>
    </div>
  )
}
export { Slider }
