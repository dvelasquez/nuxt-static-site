// TODO: this list should be outsourced since it can be modified by the users
export const placeCategories = [
  'foodtruck',
  'pizza',
  'chilena',
  'peruana',
] as const
export type PlaceCategories = typeof placeCategories[number]

export interface Place {
  name: string
  slug: string
  subtitle: string
  image: string
  location: {
    fullAddress: string
    street: string
    commune: string
    region: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  categories: Array<PlaceCategories>
}
