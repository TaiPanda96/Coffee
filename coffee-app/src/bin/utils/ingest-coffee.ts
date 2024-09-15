import { createContext } from '@coffee-app/lib/create-context'
import Decimal from 'decimal.js'
import { camelCase } from 'lodash'
import { z } from 'zod'
import csv from 'csv-parser'
import fs from 'fs'
import { Prisma } from '@coffee-app/gen/prisma'

export async function ingestCoffee() {
  const coffee = await readCoffeeDataFromFile({ filePath: 'src/bin/coffee.csv' })
  const ctx = await createContext(['prisma'])
  return ctx.prisma.$transaction(
    async (prisma: Prisma.TransactionClient) => {
      for (const coffeeInput of coffee) {
        return prisma.coffee.upsert({
          where: {
            uix_name_roaster_product_url: {
              name: coffeeInput.name,
              roaster: coffeeInput.roaster,
              productUrl: coffeeInput.productUrl,
            },
          },
          update: {},
          create: coffeeInput,
        })
      }
    },
    {
      timeout: 1000 * 60 * 5,
    },
  )
}

const coffeeSchema = z.object({
  name: z.string(),
  roaster: z.string(),
  quantity: z.string().transform((v) => parseFloat(v)),
  quantityDescription: z.string().optional(),
  price: z.string().transform((v) => new Decimal(v)),
  rating: z.string().transform((v) => new Decimal(v)),
  currencyCode: z.string().default('CAD'),
  reviews: z
    .string()
    .transform((v) => (v === null ? null : new Decimal(v)))
    .optional(),
  img: z.string(),
  productUrl: z.string(),
  sourceUrl: z.string(),
  brewMethod: z.string().optional(),
  tasteNotes: z.string().optional(),
  process: z.string().optional(),
  region: z.string().optional(),
  roastLevel: z.string().optional(),
})

export type CoffeeInputSchema = typeof coffeeSchema
export type CoffeeInput = z.infer<typeof coffeeSchema>

export async function readCoffeeDataFromFile({
  filePath,
}: {
  filePath: string
}): Promise<CoffeeInput[]> {
  const coffeeInputData: CoffeeInput[] = []
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row: Record<string, unknown>) => {
        const newRow: Record<string, string> = {}
        Object.entries(row).map(([key, value]) => {
          const newKey = key.trim().toLowerCase().replace(/\s/g, '')
          newRow[newKey] = value as string
        })

        try {
          const coffee = coffeeSchema.parse(camelCaseKey(newRow))
          coffeeInputData.push(coffee)
        } catch (error) {
          console.error('Error parsing row', newRow)
          console.error(error)
        }
      })
      .on('end', () => {
        resolve(coffeeInputData)
      })
      .on('error', (error) => {
        reject(error)
      })
  })
}

function camelCaseKey<T extends Record<string, unknown>>(obj: T): T {
  const newObj = {} as T
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = camelCase(key) as keyof T
    newObj[camelKey as keyof T] = value as T[keyof T]
  }
  return newObj
}
