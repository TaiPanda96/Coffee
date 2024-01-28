import classNames from 'classnames'
import { Inline } from '../inline'
import { Stack } from '../stack'
import { TextInput } from '../text-input'
import { FilterOptionProps } from './filter-options'

export interface SliderOptionsProps extends FilterOptionProps {
  min: number
  max?: number
  step?: number
  className?: string
  color?: 'regular' | 'light' | 'inverted' | 'inverted-light' | 'inherit' | 'error' | 'brand'
  sliderOptions?: {
    [key: string]: string[]
  }
  filterOptions: Array<{
    label: string
    description?: string
  }>
}

export const Slider = ({ sliderOptions, color }: SliderOptionsProps) => {
  return (
    <>
      {Object.entries(sliderOptions || {}).map(([key, sliderRanges]) => {
        if (!Array.isArray(sliderRanges) || !sliderRanges.length) return null
        return (
          <div className="flex flex-col space-y-6 p-6 w-80">
            <TextInput value={key} color={color} as="span" size="sm" nowrap />
            <input type="range" min="1" max="6" step="1" />
            <ul className="flex justify-between w-full ">
              {Array.isArray(sliderRanges) &&
                sliderRanges.map((input) => (
                  <Stack gap={2}>
                    <li>
                      <Inline justify="between" align="center" gap={6}>
                        <TextInput value={input} color={color} as="span" size="sm" nowrap bold />
                      </Inline>
                    </li>
                  </Stack>
                ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}
