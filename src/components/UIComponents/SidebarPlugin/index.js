import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/dashboard'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/profile'
    },
    {
      name: 'Orders',
      icon: 'ti-money',
      path: '/orders'
    },
    {
      name: 'Leagues',
      icon: 'ti-headphone-alt',
      path: '/leagues'
    },
    {
      name: 'LeagueTable',
      icon: 'ti-cup',
      path: '/leaguetable'
    },
    {
      name: 'Leader Board',
      icon: 'ti-cup',
      path: '/leaderboard'
    },
    {
      name: 'Companies',
      icon: 'ti-bar-chart',
      path: '/companies'
    },
    {
      name: 'Feedback',
      icon: 'ti-back-left',
      path: '/feedback'
    },
    {
      name: 'About Game',
      icon: 'ti-bell',
      path: '/about'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
