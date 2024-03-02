export type Strength = 'Light' | 'Medium' | 'Medium Full' | 'Full Body'
export type Acidity = 'Slightly' | 'Zesty' | 'Tart' | 'Sharp'
export type Funk = 'Mild Funk' | 'Tropical Funk' | 'No Funk'

export type BrewMethod = 'Great For Both' | 'Espresso' | 'Filtered'

export interface Coffee {
  title: string
  description: string
  image: string
  slug: string
  intensity?: Strength
  acidity?: Acidity
  funk?: Funk
  brewMethod?: 'Great For Both' | 'Espresso' | 'Filtered'
}

export const coffeeList: Coffee[] = [
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'rooster',
    intensity: 'Light',
    acidity: 'Slightly',
    funk: 'No Funk',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'catfish',
    intensity: 'Medium Full',
    funk: 'Mild Funk',
    acidity: 'Zesty',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'turbo-expresso',
    intensity: 'Medium Full',
    acidity: 'Tart',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'spirit-animal',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'detour',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'catfish',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Filtered',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'turbo-expresso',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Filtered',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'spirit-animal',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'detour',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Espresso',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'catfish',
    intensity: 'Medium',
    acidity: 'Slightly',
    brewMethod: 'Espresso',
  },
]
