import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import TestEcharts from '@/components/TestEcharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lvxw/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/lvxw/echarts',
      name: 'TestEcharts',
      component: TestEcharts
    }
  ]
})
