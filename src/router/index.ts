import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cart from '../views/CartView.vue'
import HomeView from '../views/HomeView.vue'
import Store from '../views/Store.vue'
import Electronics from '../views/Electronics.vue'
import Jewelery from '../views/Jewelery.vue'
import MenClothing from '../views/MenClothing.vue'
import WomenClothing from '../views/WomenClothing.vue'
import ProductDetails from '../components/ProductDetails/ProductsDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/electronics',
    name: 'electronics',
    component: Electronics
  },
  {
    path: '/jewelery',
    name: 'jewelery',
    component: Jewelery
  },
  {
    path: "/men's-clothing",
    name: "menClothing",
    component: MenClothing
  },
  {
    path: "/women's-clothing",
    name: "womenClothing",
    component: WomenClothing
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product-details/:productId',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: PageNotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   document.title = `${process.env.VUE_APP_TITLE} | ${to.name?.toString()}`
//   next()
// })
export default router
