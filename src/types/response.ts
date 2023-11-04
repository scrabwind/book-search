export type industryIdentifier = {
  type: string
  identifier: string
}

export type volumeInfo = {
  title: string
  publishedDate: string
  industryIdentifiers: industryIdentifier[]
  readingModes: {
    text: boolean
    image: boolean
  }
  pageCount: number
  printType: string
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
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export type saleInfo = {
  country: string
  saleability: string
  isEbook: boolean
  buyLink: string
}

export type accessInfo = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
  }
  pdf: {
    isAvailable: boolean
  }
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export type Book = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: volumeInfo
  saleInfo: saleInfo
  accessInfo: accessInfo
  searchInfo: {
    textSnippet: string
  }
}

export type BooksResponse = {
  kind: string
  totalItems: number
  items: Book[]
}
