export interface ProductProfilePathParams {
  params: {
    slug: string
  }
}

export function getProductProfilePath({ params }: ProductProfilePathParams) {
  return `/product/${params.slug}`
}
