'use client'
import { tabs } from '@/app/page'
import { Inline } from '@/components/inline'
import { ProductContainer } from '@/components/product/container'
import { TopNavigationComponent } from '@/components/top-navigation'
import { coffeeList } from '@/lib/constants/coffee-list'
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image' // Import the 'Image' component from 'next/image'
import React from 'react'

export function decodeSlug(slug: string) {
  return slug.split('-').join(' ')
}

export default function ProductProfile({ params }: { params: { slug: string } }) {
  const [itemIdx, setScrollIdx] = React.useState(0)
  const [product, setProduct] = React.useState(
    coffeeList.find((product) => params.slug.includes(product.slug)),
  )

  const handleScaleChange = (index: number) => {
    const newProduct = coffeeList[index]
    setProduct(newProduct)

    setScrollIdx(index)
  }

  return (
    <>
      <TopNavigationComponent breadcrumbs={tabs} />

      <ProductContainer
        className="bg-brand-1100"
        slug={product?.slug ?? 'specialty-coffee'}
        children={
          <Image
            src={product?.image ?? '/specialty-coffee.jpeg'}
            width={650}
            height={650}
            className="rounded-full"
            alt={''}
          />
        }
      />

      <div className="scroll-content">
        <Inline gap={2} justify="center">
          {coffeeList.map((item, idx) => (
            <div className="scroll-item" key={idx}>
              <FontAwesomeIcon
                className="cursor-pointer transition-transform duration-200 hover:scale-150"
                icon={faCoffee}
                size="2xl"
                onClick={() => handleScaleChange(idx)}
              />
            </div>
          ))}
        </Inline>
      </div>
    </>
  )
}
