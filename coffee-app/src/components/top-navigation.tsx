'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode, isValidElement } from 'react'
import { Inline } from './inline'
import { Stack } from './stack'
import { TextInput } from './text-input'

export interface Breadcrumb {
  label: string
  href: string
}

export interface TopNavigationProps {
  className?: string
  breadcrumbs?: Array<{ loading: true } | Breadcrumb>
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

export function TopNavigationComponent({ className, breadcrumbs }: TopNavigationProps) {
  return (
    <div>
      <Stack gap={4} className={classNames('bg-brand-800 py-8 px-4 sm:px-8', className)}>
        {breadcrumbs && (
          <Inline justify="right" align="center">
            {breadcrumbs.map((breadcrumb, index) => {
              if ('loading' in breadcrumb) {
                return (
                  <TextInput
                    key={index}
                    value="Loading"
                    color="inverted-light"
                    className="text-sm"
                    as="span"
                  />
                )
              }
              return (
                <Inline key={index} gap={1}>
                  <Link key={index} href={breadcrumb.href}>
                    <TextInput
                      value={breadcrumb.label}
                      color="inverted-light"
                      className="text-sm hover:text-white transition-colors justify-right mr-2 ml-2"
                      as="span"
                    />
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <div className="text-sm text-brand-300 justify-right">/</div>
                  )}
                </Inline>
              )
            })}
          </Inline>
        )}
      </Stack>
    </div>
  )
}
