import {RouteConfig} from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'Map', component: () => import('pages/Map.vue')},
      {path: 'Login', component: () => import('pages/Login.vue')},
      {path: 'Bookmarks', component: () => import('pages/Bookmarks/index.vue')},
      {path: 'Events', component: () => import('pages/Events/index.vue')},
      {path: 'Events/:id', component: () => import('pages/Events/_id.vue')},
      {path: 'Pin', component: () => import('pages/Pin/index.vue')},
      {path: 'Pin/:id', component: () => import('pages/Pin/_id.vue')},
      {path: '', component: () => import('pages/Index.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
