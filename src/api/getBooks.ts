import axios from "axios"

export type VolumeInfo = {
  title: string
  authors?: string[]
  publishedDate: string
  readingModes: {
    text: boolean
    image: boolean
  }
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export type SaleInfo = {
  country: string
  buyLink: string
}

export type AccessInfo = {
  country: string
  epub: {
    isAvailable: boolean
  }
  pdf: {
    isAvailable: boolean
  }
  webReaderLink: string
  accessViewStatus: string
}

export type Book = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: {
    textSnippet: string
  }
}

export type BooksResponse = {
  kind: string
  totalItems: number
  items?: Book[]
}

export const getBooks = async (
  query: string,
  index: number,
  filter: string
) => {
  const { data } = await axios.get<BooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${query}`,
        maxResults: 10,
        filter: filter,
        startIndex: index,
        projection: "lite"
      }
    }
  )

  return data
}
