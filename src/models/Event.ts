export type eventResponse = {
  _id: string
  date: string
  description: string
  genre: string
  mainImage: string
  title: string 
  price: number
}

export type EventFormFields = {
  date: string
  description: string
  genre: string
  mainImage: string
  title: string
  price: number
}

export const normalizeEvent = (input: eventResponse) => ({
  _id: input._id || '',
  date: input.date || '',
  description: input.description || '',  
  genre: input.genre || '',
  mainImage: input.mainImage || '',
  title: input.title || '',
  price: input.title || 0,
})

export type Event = ReturnType<typeof normalizeEvent>