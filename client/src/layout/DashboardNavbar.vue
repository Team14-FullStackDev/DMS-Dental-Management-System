<template>

    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
                
            </div>
        </form>   
        <div class="col-mb">
          <post-patient></post-patient>
          </div>
    </base-nav>
</template>
<script>

import PostPatient from '@/components/PatientInfo/PostPatient'

export default {
    components: {
    PostPatient
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: '',
       
      };
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      addTreatmentList(t) {
        this.addedTreatments.push(t);
      }
    }
  };
</script>
