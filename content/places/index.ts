/* eslint-disable camelcase */
export interface Place {
  name: string
  slug: string
  subtitle: string
  image: string
  location: {
    fullAddress: string
    street: string
    street2?: string
    commune: string
    region: string
    country: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  food_types: string
  working_hours: string
  payment_methods: string
  phone?: string[]
  instagram: string
  facebook?: string
  web?: string
  delivery: boolean
}
