import classNames from 'classnames'
import { Stack } from './stack'
import { Inline } from './inline'

interface SectionCardProps {
  children?: React.ReactNode
  title?: string
  titleLeft?: boolean
  titleRight?: boolean
  image?: string
  description?: string
}

export function SectionCard({ children, title, titleLeft, titleRight }: SectionCardProps) {
  return (
    <Stack className={classNames('bg-white rounded px-4 py-6 shadow-md brown-shadow')} gap={5}>
      {(title || titleRight) && (
        <Inline>
          {title && (
            <h2
              className={classNames(
                `text-2xl font-semibold`,
                titleLeft ? `text-left` : `text-center`,
              )}
            >
              {title}
            </h2>
          )}
          {titleRight && (
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          )}
        </Inline>
      )}
      {children}
    </Stack>
  )
}
