'use client'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styles from './profile-list.module.css'
import { Stack } from '../../../components/stack'
import classNames from 'classnames'
import { Inline } from '../../../components/inline'
import { ProductDetail } from './carousel'
import { Coffee } from '../../../lib/constants/coffee-list'
import { getProductProfilePath } from '../[...slug]/path'

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

export function ProfileList({ products, params }: PressMenuProps) {
  const liRefs = useRef<HTMLLIElement[]>([])
  const productRefs: MutableRefObject<(HTMLDivElement | null)[]> = useRef([])
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
    const productRef = productRefs.current[index] as HTMLElement
    if (productRef) {
      productRef.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    const product = products[index]
    setProduct(product)
    // Update the browser URL without navigating
    window.history.pushState({}, '', getProductProfilePath({ params: { slug: product?.slug } }))
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
    <div className="flex flex-col items-center justify-center">
      <div className="fixed top-3/4 left-[-4.5%] transform -translate-y-1/2">
        <ul>
          {products.map((product, i) => (
            <li
              ref={(el) => (liRefs.current[i] = el!)}
              key={i}
              className={`relative block ${styles.menuItem} hover:${styles.lineHover}`}
            >
              <a
                onClick={() => handleScrollPosition(i)}
                className={`relative block ${styles.menuItem} hover:${styles.lineHover}`}
              >
                <div className={`${styles.hoverText}`}> {toTitleCase(product.slug)}</div>
                <span className={`${styles.line} js-line`} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Stack gap={6} align="center">
        {products.map((product, i) => {
          return (
            <div
              className="flex-col justify-center"
              key={i}
              ref={(el) => (productRefs.current[i]! = el!)}
            >
              <Inline gap={4}>
                <img src={product.image} className={classNames(styles.image)} />
                <ProductDetail product={product} />
              </Inline>
            </div>
          )
        })}
      </Stack>
    </div>
  )
}
