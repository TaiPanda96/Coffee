import { HomePath, getHomePath } from '@/app/path'

export interface ProductProfilePathParams extends HomePath {
  params: {
    slug: string
  }
}

export function getProductProfilePath({ params }: ProductProfilePathParams) {
  return `/product/${params.slug}`
}
