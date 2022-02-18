export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IMunicipalityData {
  municipalityCode: string
  municipalityName: string
  prefectureCode: string
  parentDesignatedCityCode: string | null
  countyId: number | null
}

export interface INgExpressionData {
  ngExpression: string
  ngExpressionYomi: string | null
  ngExpressionType: string
  availableParaphrases: string | null
  availableConditions: string | null
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}
