'use client'
import { getProductProfilePath } from '@/app/product/[...slug]/path'
import classNames from 'classnames'
import Link from 'next/link'
import { Navigation } from '../navigation'
import { Stack } from '../stack'
import { toTitleCase } from './profile-list'
import { Coffee } from '@/lib/constants/coffee-list'

import styles from './product-profile-list.module.css'
import { useEffect, useRef, useState } from 'react'

export interface PressMenuProps {
  params: {
    slug: string
  }
  products: Coffee[]
}

export function PressMenu({ params, products }: PressMenuProps) {
  const liRefs = useRef<HTMLLIElement[]>([])
  const [product, setProduct] = useState(
    products.find((product) => params.slug.includes(product.slug)),
  )
  /**
   * Add event listeners to each li element so that on mouse enter, the line opacity is updated
   */
  useEffect(() => {
    for (let i = 0; i < liRefs.current.length; i++) {
      const currentLi = liRefs.current[i]
      currentLi.addEventListener('mouseenter', () => onMouseEnter(i))
    }
  }, [])

  const handleProductClick = (productSlug: string) => {
    const product = products.find((product) => product.slug === productSlug)
    setProduct(product)
  }

  /**
   * Update the line opacity based on the distance from the hovered element.
   * Set the product state to the hovered product index and show the product slug.
   */
  const onMouseEnter = (index: number) => {
    liRefs.current.forEach((li, i) => {
      const line = liRefs.current[i].querySelector('.js-line') as HTMLElement
      if (line) {
        const distance = (Math.abs(index - i) / liRefs.current.length) * Math.PI
        let scale = Math.max(1, 2 * Math.cos(distance) + 2.5)
        scale = scale / 4.5
        line.style.transform = `scaleX(${scale})`
      }
    })
  }
  return (
    <Stack align="left">
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2">
        <Navigation breadcrumbs={[{ label: 'Return To Coffee Shelf', href: '/home' }]} />
        <ul>
          {products.map((product, i) => (
            <li
              ref={(el) => (liRefs.current[i] = el!)}
              key={i}
              className={`relative block ${styles.menuItem} hover:${styles.lineHover}`}
            >
              <Link
                onClick={() => handleProductClick(product.slug)}
                href={getProductProfilePath({ params: { slug: product.slug } })}
                className={classNames('hover:text-gray-400', 'transition-colors')}
              >
                <div className={`${styles.hoverText}`}> {toTitleCase(product.slug)}</div>
                <span className={`${styles.line} js-line`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Stack>
  )
}
