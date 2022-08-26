import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event',
    name: 'event',
    component: HelloWorld,
    props: {
      header: '!!-- СОБЫТИЯ --!!'
    },
    children: [
      {
        name: 'sub-event-1',
        path: 'sub-event-1',
        component: HelloWorld,
        props: {
          header: 'SUB EVENT 1'
        }
      },
      {
        name: 'sub-event-2',
        path: 'sub-event-2',
        component: HelloWorld,
        props: {
          header: 'SUB EVENT 2',
          tabs: [
            {
              name: 'general',
              path: 'general',
              header: 'Основное'
            },
            {
              name: 'attribute-editor',
              path: 'attribute-editor',
              header: 'Редактор атрибутов'
            },
            {
              name: 'widgets',
              path: 'widgets',
              header: 'Виджеты'
            },
            {
              name: 'link-types',
              path: 'link-types',
              header: 'Редактор связей'
            },
            {
              name: 'event-generator',
              path: 'event-generator',
              header: 'Генератор событий'
            }
          ]
        },
        children: [
          {
            name: 'general',
            path: 'general',
            component: HelloWorld,
            props: {
              header: '<* general *>'
            }
          },
          {
            name: 'attribute-editor',
            path: 'attribute-editor',
            component: HelloWorld,
            props: {
              header: '<***> attribute-editor <***>'
            }
          },
          {
            name: 'widgets',
            path: 'widgets',
            component: HelloWorld,
            props: {
              header: '<***> widgets <***>'
            }
          },
          {
            name: 'link-types',
            path: 'link-types',
            component: HelloWorld,
            props: {
              header: '<***> link-types <***>'
            }
          },
          {
            name: 'event-generator',
            path: 'event-generator',
            component: HelloWorld,
            props: {
              header: '<***> event-generator <***>'
            }
          },
        ]
      }
    ]
  },
  {
    path: '/meeting',
    name: 'meeting'
  },
  {
    path: '/b-trip',
    name: 'b-trip'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
