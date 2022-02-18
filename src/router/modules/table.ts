import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const tableRoutes: RouteConfig = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/table/dynamic-table/index.vue'),
      name: 'DynamicTable',
      meta: { title: 'dynamicTable' }
    },
    {
      path: '市区町村Readonly',
      component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/table/municipalityTable.vue'),
      name: '市区町村テーブル',
      meta: { title: '市区町村テーブル Read only' }
    },
    {
      path: '市区町村',
      component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/complex-table.vue'),
      name: 'ComplexTable',
      meta: { title: '市区町村テーブル' }
    },
    {
      path: '禁止表現',
      component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/ngExpressionTable.vue'),
      name: '禁止表現テーブル',
      meta: { title: '禁止表現テーブル' }
    }
  ]
}

export default tableRoutes
