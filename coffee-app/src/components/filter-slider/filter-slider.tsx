import { SectionCard } from '../section-card'
import { Stack } from '../stack'
import { TextInput } from '../text-input'
import { Slider } from './slider'

interface FilterSliderProps {
  key?: string
  id: string
  label: string
}

export function FilterSlider({ key, id, label }: FilterSliderProps) {
  return (
    <SectionCard className="justify-stretch @container">
      <Stack gap={6}>
        <TextInput value={label} color="brand" as="h2" />
        <Slider sections={4} />
      </Stack>
    </SectionCard>
  )
}
