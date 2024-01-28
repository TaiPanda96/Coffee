'use client'
import classNames from 'classnames'
import { SectionCard } from '../section-card'
import { Stack } from '../stack'
import { Inline } from '../inline'
import { TextInput } from '../text-input'
import { Slider } from '../filter/slider-options'
import { Button } from '../button'

export interface ProductContainerProps {
  children?: React.ReactNode
  className?: string
  slug: string
}

const tabs = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/product' },
  { label: 'Our Story', href: '/about' },
]

export function ProductContainer({ slug, children }: ProductContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-flow-row gap-8 @2xl:grid-cols-2 justify-center">
        <Stack gap={4}>
          <Inline gap={8} justify="between">
            {children}
            <SectionCard
              className={classNames(
                'w-3/4 max-w-lg', // Adjusts width to 3/4 of its container and sets a maximum width
                'flex flex-col items-center justify-center',
                'bg-brand-1400',
                'p-4', // Adjusts padding inside the card
                'mx-auto', // Centers the card horizontally with auto margins
                'mt-11 mr-11', // Adjusts margin; you might want to change these values
              )}
            >
              <Stack gap={8} align="left">
                <Inline gap={6} justify="center">
                  <TextInput value={slug} color="inverted" as="span" size="lg" />
                </Inline>

                <TextInput
                  value={'What they say about this coffee'}
                  color="inverted"
                  as="span"
                  size="md"
                />
                <TextInput
                  value={`"This coffee is a medium-dark roast, with a rich, full-bodied flavor and a smooth finish. It’s a blend of 100% Arabica beans from Central and South America, and it’s certified organic and fair trade."`}
                  color="inverted-light"
                  as="span"
                  size="sm"
                />

                <Stack gap={8} align="left">
                  <TextInput value={'Details'} color="inverted" as="span" size="md" bold />
                  <Inline gap={8} justify="between">
                    <Button
                      className={classNames('bg-brand-1100', 'text-black')}
                      title="Farm/Origin"
                    />
                    <Button className={classNames('bg-brand-1100', 'text-black')} title="Process" />
                  </Inline>
                </Stack>

                <Stack gap={4} align="left">
                  <TextInput value={'Profile'} color="inverted" as="span" size="md" bold />

                  <Slider
                    className="pointer-events-none"
                    title="Coffee Profile"
                    sliderOptions={{
                      Acidity: ['Low', 'High'],
                      Body: ['Low', 'High'],
                      Flavor: ['Low', 'High'],
                    }}
                    min={0}
                    filterOptions={[]}
                  />
                </Stack>
              </Stack>
            </SectionCard>
          </Inline>
        </Stack>
      </div>
    </div>
  )
}
