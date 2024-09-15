'use server'

import { FilterOptions } from '@coffee-app/components/filter/container'
import { Coffee } from '@coffee-app/gen/prisma'
import { filterCategories } from '@coffee-app/lib/constants/filter-categories'
import { createContext } from '@coffee-app/lib/create-context'

export type CoffeeDataOutput = Omit<
  Coffee,
  'id' | 'createdAt' | 'updatedAt' | 'tasteNotes' | 'brewMethod' | 'price' | 'reviews' | 'rating'
> & {
  slug: string
  price: number
  reviews: number
}

export type CoffeeFilterOutput = {
  brewMethod: string[]
  tasteNotes: string[]
}

export interface CoffeeActionsOutput {
  data: CoffeeDataOutput[]
  filters: FilterOptions[]
}

export async function getCoffeeAction(): Promise<CoffeeActionsOutput> {
  const ctx = await createContext(['prisma'])
  const coffeeRawData = await ctx.prisma.coffee.findMany({
    take: 10,
  })

  const uniqueBrewMethods = new Set<string>()
  const uniqueTasteNotes = new Set<string>()

  for (const coffee of coffeeRawData) {
    if (coffee.brewMethod) {
      coffee.brewMethod.split(' or ').forEach((method) => {
        uniqueBrewMethods.add(method.trim())
      })
    }

    if (coffee.tasteNotes) {
      coffee.tasteNotes.split(',').forEach((note) => {
        uniqueTasteNotes.add(note.trim())
      })
    }
  }

  const coffeeData = coffeeRawData.map((coffee) => {
    return {
      slug: slugify(coffee.name),
      name: coffee.name,
      roaster: coffee.roaster,
      quantity: coffee.quantity,
      quantityDescription: coffee.quantityDescription,
      price: coffee.price.toNumber(),
      rating: coffee.rating.toNumber(),
      currencyCode: coffee.currencyCode,
      reviews: coffee.reviews?.toNumber() ?? 0,
      img: coffee.img,
      productUrl: coffee.productUrl,
      sourceUrl: coffee.sourceUrl,
      brewMethod: coffee.brewMethod?.includes('or')
        ? coffee.brewMethod?.split(' or ')
        : [coffee.brewMethod || 'Espresso'] ?? [],
      tasteNotes: coffee.tasteNotes?.split(',').map((note) => note.trim()) ?? [],
      process: coffee.process,
      region: coffee.region,
      roastLevel: coffee.roastLevel,
    }
  })

  const dynamicFilterCategories = filterCategories
    .map((category) => {
      if (category.key === 'brewMethod') {
        return {
          ...category,
          options: Array.from(uniqueBrewMethods),
        }
      }

      if (category.key === 'tasteNotes') {
        return {
          ...category,
          options: Array.from(uniqueTasteNotes),
        }
      }

      if (category.key === 'roastLevel') {
        return {
          ...category,
          options: ['Light', 'Medium', 'Medium Full', 'Full', 'Extra Full', 'Extra Light'],
        }
      }
    })
    .filter((category) => category !== undefined) as FilterOptions[]

  return {
    data: coffeeData,
    filters: dynamicFilterCategories,
  }
}

function slugify(text: string) {
  // Replaces spaces with hyphens and removes extra '-' characters
  return text.toLowerCase().replace(/ /g, '-').replace(/-+/g, '-')
}
