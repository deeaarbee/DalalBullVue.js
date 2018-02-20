import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
/*eslint-disable*/
// Admin pages
import Dashboard from 'src/components/Dashboard/Views/Dashboard.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import About from 'src/components/Dashboard/Views/About.vue'
import Companies from 'src/components/Dashboard/Views/Companies.vue'
import Leaderboard from 'src/components/Dashboard/Views/Leaderboard.vue'
import Leagues from 'src/components/Dashboard/Views/Leagues.vue'
import Orders from 'src/components/Dashboard/Views/Orders.vue'
import Feedback from 'src/components/Dashboard/Views/Feedback.vue'
import Login from 'src/components/Dashboard/Views/Login.vue'
import Register from 'src/components/Dashboard/Views/Register.vue'
import LeagueTable from 'src/components/Dashboard/Views/LeagueTable.vue'
import VueResource from 'vue-resource'
import Userleagues from 'src/components/Dashboard/Views/Userleagues.vue'
import Vue from 'vue'

Vue.use(VueResource);
/*eslint-disable*/
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user',
    component: DashboardLayout,
    redirect: '/profile',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/profile',
        name: 'profile',
        component: UserProfile
      },
      {
        path: '/leaguetable',
        name: 'leaguetable',
        component: LeagueTable
      },
      {
        path: '/myleagues/:leagueid',
        name: 'myleagues',
        component: Userleagues
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/companies',
        name: 'companies',
        component: Companies
      },
      {
        path: '/leaderboard',
        name: 'leaderboard',
        component: Leaderboard
      },
      {
        path: '/leagues',
        name: 'leagues',
        component: Leagues
      },
      {
        path: '/orders',
        name: 'orders',
        component: Orders
      },
      {
        path: '/feedback',
        name: 'feedback',
        component: Feedback
      }
    ]
  },
  { path: '*', component: NotFound }
];



/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
