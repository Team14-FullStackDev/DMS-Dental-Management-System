<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     >
            <!-- Mask -->
            <span class="mask bg-gradient-info opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid align-items-center">
                <!-- <div class="row">
                    <div class="col-sm-1">76 Patients</div>
                    <div class="col">Sort By</div>
                </div> -->
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <projects-table title="Patients"></projects-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectsTable from './Tables/ProjectsTable'

  export default {
    components: {
        ProjectsTable
    },
    name: 'user-profile',
    data: () => {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>

<style></style>
