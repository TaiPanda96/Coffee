'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './product-profile-list.module.css'
import { Coffee } from '@/lib/constants/coffee-list'
import { Stack } from '../stack'
import Link from 'next/link'
import { Navigation } from '../navigation'
import classNames from 'classnames'
import { getProductProfilePath } from '@/app/product/[...slug]/path'
import { Inline } from '../inline'
import { ProductDetails } from './product-details'

export interface PressMenuProps {
  params: {
    slug: string
  }
  products: Coffee[]
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export function ProductProfiles({ products, params }: PressMenuProps) {
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

  const handleScrollPosition = (index: number) => {
    const currentLi = liRefs.current[index]
    currentLi.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const product = products.find((product) => product.slug === currentLi.textContent)
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
    <div className="min-h-screen">
      <Inline justify="between" align="center" gap={6}>
        <div className="w-1/3 ml-auto">
          <div className="fixed  left-6 top-1/2 transform -translate-y-1/2">
            <Navigation breadcrumbs={[{ label: 'Return To Coffee Shelf', href: '/home' }]} />
            <ul>
              {products.map((product, i) => (
                <li
                  ref={(el) => (liRefs.current[i] = el!)}
                  key={i}
                  className={`relative block ${styles.menuItem} hover:${styles.lineHover}`}
                >
                  <Link
                    onClick={() => handleScrollPosition(i)}
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
        </div>

        <div className="scrollable-content">
          {products.map((product, i) => {
            return (
              <div className="flex-col p-11" key={i}>
                <Stack gap={6} className="flex-col p-11">
                  <Inline
                    gap={8}
                    justify="between"
                    className={classNames('flex items-center', 'flex-grow', 'p-8')}
                  >
                    <img src={product.image} />
                    <ProductDetails product={product} />
                  </Inline>
                </Stack>
              </div>
            )
          })}
        </div>
      </Inline>
    </div>
  )
}
