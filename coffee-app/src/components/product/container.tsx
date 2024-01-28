'use client'
import classNames from 'classnames'
import { SectionCard } from '../section-card'
import { Stack } from '../stack'
import { Inline } from '../inline'
import { TextInput } from '../text-input'
import { Button } from '../button'
import { Badge } from '../badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from 'react'

export interface ProductContainerProps {
  children?: React.ReactNode
  className?: string
  slug: string
}

export function ProductContainer({ slug, children }: ProductContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = useCallback(() => {
    setIsExpanded(!isExpanded)

    // TODO: Add logic to switch between up and down chevron
  }, [isExpanded])

  return (
    <div className="flex items-center justify-center">
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
                <Inline gap={8} justify="between">
                  <TextInput value={slug} color="inverted" as="span" size="lg" />
                </Inline>

                <Inline gap={8} justify="between">
                  <Badge size="md" rounded label="seasonal" />
                  <Badge size="md" rounded label="in stock" />
                  <Badge size="md" rounded label="authors pick" />
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

                <Inline justify="between" grow className="gap-2">
                  <TextInput value={'Learn More'} color="inverted" as="span" size="md" bold />
                  <FontAwesomeIcon
                    onClick={handleExpand}
                    icon={isExpanded ? faChevronUp : faChevronDown}
                    color="white"
                    fontStyle={`font-size: 1.5rem; font-style: white`}
                  />
                </Inline>

                {isExpanded && (
                  <Stack gap={8} align="left">
                    <Inline gap={8} justify="between">
                      <TextInput value={`Origin`} color="inverted" as="span" size="sm" />
                      <Badge size="sm" rounded label="Brazil" />
                    </Inline>
                    <Inline gap={8} justify="between">
                      <TextInput value={`Process`} color="inverted" as="span" size="sm" />
                      <Badge size="sm" rounded label="Washed" />
                    </Inline>
                    <Inline gap={8} justify="between">
                      <TextInput value={`Bag Sizes`} color="inverted" as="span" size="sm" />
                      <Badge size="sm" rounded label="250g" />
                      <Badge size="sm" rounded label="1kg" />
                    </Inline>
                  </Stack>
                )}

                <Stack gap={8} align="center">
                  <Button
                    className={classNames(
                      'hover:bg-gray-400',
                      'bg-brand-1100',
                      'text-black',
                      'px-8',
                      'justify-items-center',
                    )}
                    title="Purchase Now"
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
