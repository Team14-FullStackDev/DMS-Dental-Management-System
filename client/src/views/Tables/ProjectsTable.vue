<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="patient">
        <template slot="columns">
          <th>Basic info</th>
          <th>Phone number</th>
          <th>Next Appointment</th>
          <th>Last Appointment</th>
          <th>Register Date</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <!-- <img alt="Image placeholder" :src="row."> -->
              </a>
              <div class="media-body">
                <router-link :to="{name: 'patient-info', params: {id: row._id}}" class="name mb-0 text-sm" href="#/patientinfo">{{row.patient_name}}</router-link>
              </div>
            </div>
          </th>
          <td class="budget">
            {{row.phone_number}}
          </td>
          <td>
            NaN
          </td>
          <td>
            <!-- {{row.lastappointment}} -->
            NaN
          </td>

          <td>
            {{ row.createdAt | formatDate }}
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" type="danger" @click="deletePatient(row._id)" style="color: red">Delete Patient</a>
                
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination total="30"></base-pagination>
    </div>

  </div>
</template>
<script>
import { api } from '@/helpers/helpers';
import moment from 'moment'

  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        patient: [],
        // tableData: [
        //   {
        //     img: 'img/theme/bootstrap.jpg',
        //     title: 'Pich Sokmeng',
        //     budget: '012 123 123',
        //     status: 'DD/MM/YYYY',
        //     lastappointment: 'DD/MM/YYYY',
        //     completion: 60
        //   },
        //   {
        //     img: 'img/theme/angular.jpg',
        //     title: 'Pong Channy',
        //     budget: '012 123 123',
        //     status: 'DD/MM/YYYY',
        //     lastappointment: 'DD/MM/YYYY',
        //     completion: 100
        //   },
        //   {
        //     img: 'img/theme/sketch.jpg',
        //     title: 'Sann Chamrouen',
        //     budget: '012 123 123',
        //     status: 'DD/MM/YYYY',
        //     lastappointment: 'DD/MM/YYYY',
        //     completion: 72
        //   },
        //   {
        //     img: 'img/theme/react.jpg',
        //     title: 'Kaing Sokheng',
        //     budget: '012 123 123',
        //     status: 'DD/MM/YYYY',
        //     lastappointment: 'DD/MM/YYYY',
        //     completion: 90
        //   },
        //   {
        //     img: 'img/theme/vue.jpg',
        //     title: 'Daro Dayla',
        //     budget: '012 123 123',
        //     status: 'DD/MM/YYYY',
        //     lastappointment: 'DD/MM/YYYY',
        //     completion: 100
        //   }
        // ]
      }
    },
    methods: {
      async deletePatient(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletepatient(id);
      this.flash('task deleted sucessfully!', 'success');
      const newpatient = this.patient.filter(patient => patient._id !== id);
      this.patient = newpatient;
    }
    },
    async mounted() {
      this.patient = await api.getpatients();
      console.log(this.patient);
    },
    filters: {
        formatDate(date){
            return moment(String(date)).format('DD/MM/YYYY')
        }
    }
  }
</script>
<style>
</style>
