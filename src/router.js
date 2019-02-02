import Vue from 'vue'
import Router from 'vue-router'
import WordSearch from '@/views/WordSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordSearch',
      component: WordSearch
    }
  ]
})
