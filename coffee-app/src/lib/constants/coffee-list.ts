export type ExperienceStrength = 'Light' | 'Medium' | 'Medium Full' | 'Full Body'
export type ExperienceAcidity = 'Slightly' | 'Zesty' | 'Tart' | 'Sharp'
export type ExperienceFunk = 'Mild Funk' | 'Tropical Funk' | 'No Funk'

export type BrewMethod = 'Great For Both' | 'Espresso' | 'Filtered'

export interface Coffee {
  title: string
  description: string
  image: string
  slug: string
  experience?: {
    strength: 'Light' | 'Medium' | 'Medium Full' | 'Full Body'
    acidity: 'Slightly' | 'Zesty' | 'Tart' | 'Sharp'
    funk: 'Mild Funk' | 'Tropical Funk' | 'No Funk'
  }
  brewMethod?: 'Great For Both' | 'Espresso' | 'Filtered'
}

export const coffeeList: Coffee[] = [
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/rooster-coffee.jpeg',
    slug: 'rooster',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/catfish.jpeg',
    slug: 'catfish',
    experience: {
      strength: 'Full Body',
      acidity: 'Slightly',
      funk: 'Tropical Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/specialty-coffee.jpeg',
    slug: 'turbo-expresso',
    experience: {
      strength: 'Light',
      acidity: 'Zesty',
      funk: 'Mild Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'spirit-animal',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/detour.jpeg',
    slug: 'detour',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/catfish.jpeg',
    slug: 'catfish',
    experience: {
      strength: 'Medium Full',
      acidity: 'Zesty',
      funk: 'Tropical Funk',
    },
    brewMethod: 'Filtered',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/specialty-coffee.jpeg',
    slug: 'turbo-expresso',
    experience: {
      strength: 'Medium Full',
      acidity: 'Tart',
      funk: 'Tropical Funk',
    },
    brewMethod: 'Filtered',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/spirit-animal.jpeg',
    slug: 'spirit-animal',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Great For Both',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/detour.jpeg',
    slug: 'detour',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Espresso',
  },
  {
    title: 'Coffee',
    description: 'Fruity, Floral, Bright',
    image: '/catfish.jpeg',
    slug: 'catfish',
    experience: {
      strength: 'Medium',
      acidity: 'Slightly',
      funk: 'Mild Funk',
    },
    brewMethod: 'Espresso',
  },
]
