'use client'
import ProductProfileLayout from './layout'

export default function ProductsPage({ params }: { params: { slug: string } }) {
  return <ProductProfileLayout params={params} />
}
