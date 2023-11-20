import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode, isValidElement } from 'react'
import { Inline } from './inline'
import { Stack } from './stack'
import { CustomText } from './text-input'

export interface Breadcrumb {
  label: string
  href: string
}

export interface AppContainerProps {
  breadcrumbs?: Array<{ loading: true } | Breadcrumb>
  children: ReactNode
  heading: string | { loading: true } | ReactNode
  headingBottom?: ReactNode
  headingRight?: ReactNode
  headingSize?: '3xl'
  tabs?: {
    current?: string
    options: Array<{
      key: string
      label: string
      href: string
    } | null>
    basePath?: string
  }
}

export function AppContainer({
  breadcrumbs,
  children,
  heading,
  headingBottom,
  headingRight,
  tabs,
}: AppContainerProps) {
  if (tabs) {
    if (headingBottom) {
      throw new Error('Cannot use both tabs and headingBottom')
    }

    headingBottom = (
      <Inline gap={4} aria-label="Tabs" className="flex-col sm:flex-row mb-4 sm:mb-0">
        {tabs.options
          .filter((e) => e !== null)
          .map((tab) => (
            <Link
              key={tab?.key}
              href={`${tabs.basePath ?? ''}${tab?.href}`}
              className={classNames('px-2 py-2 rounded', {
                'bg-zinc-100/25 border-b-2 border-brand-700': tab?.key === tabs.current,
              })}
              aria-current={tab?.key === tabs.current ? 'page' : undefined}
            >
              <CustomText
                value={tab?.label}
                color={tab?.key === tabs.current ? 'inverted' : 'inverted-light'}
              />
            </Link>
          ))}
      </Inline>
    )
  }

  return (
    <Stack gap={0}>
      <div
        className={classNames(
          'w-full',
          'bg-gradient-to-b',
          'from-brand-600',
          'to-brand-800',
          'pb-10',
          '-mb-10',
        )}
      >
        <Stack gap={8}>
          <Inline justify="between" className="">
            <Stack gap={3}>
              {breadcrumbs && (
                <nav className="hidden sm:flex" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center gap-2">
                    {breadcrumbs.map((breadcrumb, index) => (
                      <li key={index}>
                        <div className="flex items-center gap-2">
                          {index > 0 && <CustomText value="/" color="inverted-light" />}
                          {'loading' in breadcrumb ? (
                            <div className="animate-pulse">
                              <div className="bg-gray-400 rounded-full h-4 w-32" />
                            </div>
                          ) : (
                            <Link
                              href={breadcrumb.href}
                              className="CustomText-gray-400 hover:CustomText-gray-300"
                            >
                              <CustomText value={breadcrumb.label} color="inherit" />
                            </Link>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {typeof heading === 'string' ? (
                <CustomText color="inverted" size="xl" value={heading} as="h1" />
              ) : isValidElement(heading) ? (
                heading
              ) : (
                <div className="animate-pulse">
                  <div className="bg-gray-400 rounded-full h-8 w-40" />
                </div>
              )}
            </Stack>
            {headingRight}
          </Inline>
          {headingBottom}
        </Stack>
      </div>

      <div className="container mx-auto pb-4">{children}</div>
    </Stack>
  )
}
