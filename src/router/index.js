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
      },
      {
        name: 'sub-event-3',
        path: 'sub-event-3',
        component: HelloWorld,
        props: {
          header: 'SUB EVENT 3'
        }
      },
    ]
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: HelloWorld,
    props: {
      header: 'Meeting view'
    },
    children: [
      {
        name: 'sub-meeting-1',
        path: 'sub-meeting-1',
        component: HelloWorld,
        props: {
          header: 'SUB MEETING 1'
        }
      },
      {
        name: 'sub-meeting-2',
        path: 'sub-meeting-2',
        component: HelloWorld,
        props: {
          header: 'SUB MEETING 2'
        }
      },
      {
        name: 'sub-meeting-3',
        path: 'sub-meeting-3',
        component: HelloWorld,
        props: {
          header: 'SUB MEETING 3'
        }
      }
    ]
  },
  {
    path: '/b-trip',
    name: 'b-trip',
    component: HelloWorld,
    props: {
      header: 'Bad (Business) Trip View'
    },
    children: [
      {
        name: 'sub-b-trip-1',
        path: 'sub-b-trip-1',
        component: HelloWorld,
        props: {
          header: 'SUB Bad (Business) Trip 1'
        }
      },
      {
        name: 'sub-b-trip-2',
        path: 'sub-b-trip-2',
        component: HelloWorld,
        props: {
          header: 'SUB Bad (Business) Trip 2'
        }
      },
      {
        name: 'sub-b-trip-3',
        path: 'sub-b-trip-3',
        component: HelloWorld,
        props: {
          header: 'SUB Bad (Business) Trip 3'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
