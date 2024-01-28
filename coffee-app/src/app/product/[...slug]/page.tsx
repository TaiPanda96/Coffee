import { tabs } from '@/app/page'
import { ProductContainer } from '@/components/product/container'
import { TopNavigationComponent } from '@/components/top-navigation'
import { coffeeList } from '@/lib/constants/coffee-list'
import Image from 'next/image' // Import the 'Image' component from 'next/image'

export function decodeSlug(slug: string) {
  return slug.split('-').join(' ')
}

export default function ProductProfile({ params }: { params: { slug: string } }) {
  const productData = coffeeList.find((product) => params.slug.includes(product.slug))

  return (
    <>
      <TopNavigationComponent breadcrumbs={tabs} />
      <ProductContainer
        className="bg-brand-1100"
        slug={decodeSlug(params.slug.toString().replace(/,/g, '-'))}
        children={
          <Image
            src={productData?.image ?? '/specialty-coffee.jpeg'}
            width={650}
            height={650}
            className="rounded-full"
            alt={''}
          />
        }
      />
    </>
  )
}
