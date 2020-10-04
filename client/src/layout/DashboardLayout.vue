<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Overview',
            icon: 'ni ni-tv-2 text-blue',
            path: '/overview'
          }"
        />

        <sidebar-item :link="{name: 'Calender', icon: 'ni ni-calendar-grid-58 text-blue', path: '/calendar'}"/>
        <sidebar-item :link="{name: 'Patient List', icon: 'ni ni-single-02 text-blue', path: '/patient-list'}"/>
        <sidebar-item :link="{name: 'Payment Information', icon: 'ni ni-single-02 text-blue   ', path: '/payment-info'}"/>
        <sidebar-item :link="{name: 'Settings', icon: 'ni ni-bullet-list-67 text-blue', path: '/settings'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
