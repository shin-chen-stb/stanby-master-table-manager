import request from '@/utils/request'
import { IArticleData, INgExpressionData } from './types'

export const defaultNgExpressionData: INgExpressionData = {
  ngExpression: '',
  ngExpressionYomi: '',
  ngExpressionType: '',
  availableParaphrases: '',
  availableConditions: ''
}

export const getNgExpressions = (params: any) =>
  request({
    url: '/tables/ngExpressions',
    method: 'get',
    params
  })
