import request from '@/utils/request'
import { IArticleData, IMunicipalityData } from './types'

export const defaultMunicipalityData: IMunicipalityData = {
  municipalityCode: '',
  municipalityName: '',
  prefectureCode: '',
  parentDesignatedCityCode: '',
  countyId: NaN
}

export const getMunicipalities = (params: any) =>
  request({
    url: '/tables/municipalities',
    method: 'get',
    params
  })
