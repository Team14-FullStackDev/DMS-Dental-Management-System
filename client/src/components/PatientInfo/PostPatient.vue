<template>
    <div>
    <base-button block type="secondary" class="mb" @click="modals = true">
            + New Patient
          </base-button>

            <modal :show.sync="modals"
                  body-classes="p-0"
                  modal-classes="modal-dialog-centered modal-xl"
                  >
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    
                    
                        <form @submit.prevent="addPatient">
                          <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
                            <small>FULL NAME</small>
                            <base-input alternative
                                        class="mb-3"
                                        placeholder="eg. Jane Doe"
                                        addon-left-icon="ni ni-single-02"
                                        v-model="patient.patient_name"
                                        type="text"
                                        >
                            </base-input>
                            <small>PHONE NUMBER</small>
                            <base-input type="text"
                                        placeholder="0XX XXX XXX"
                                        addon-left-icon="ni ni-tablet-button"
                                        v-model="patient.phone_number"
                                        >
                            </base-input>
                            <small>BIRTHDAY</small>
                            <base-input alternative
                                        type="DATE"
                                        addon-left-icon="ni ni-calendar-grid-58"
                                        v-model="patient.birthday"
                                        >
                            </base-input> 
                            <!-- <small>TREATMENTS</small>
                            <br>
                            <div class="card shadow mb-2" v-for="treatment in addedTreatments" :key="treatment">
                              <div class="row mt-1 mb-2 pl-4 pr-4 p-2">
                              <div class="col">{{treatment}}</div>
                              <div class="col">
                                <div class="float-right">price</div>
                                </div>
                              </div>
                            </div>
                            <base-dropdown>
                              <base-button slot="title" type="info" class="dropdown-toggle">
                                Add treatment
                              </base-button>
                              <div class="dropdown-item" v-for="item in items" :key="item" @click="addTreatmentList(item.treatment)">{{ item.treatment }}</div>
                            </base-dropdown> -->
                            <div class="text-center">
                                <button type="submit" class="my-4" @click="modals=false">Save</button>
                            </div>
                        </form>
                
                </card>
            </modal>
    </div>
</template>

<script>
// import { EventBus } from '@/helpers/event-bus.js';
import { api } from '@/helpers/helpers';

export default {
    name: 'post-patient',
    data () {
        return {
          errorsPresent: false,
          modals: false,
        // dummy treatment
        // items: [
        //   { treatment: 'Root Canal'},
        //   { treatment: 'Cleaning'}
        // ],
        // addedTreatments: []
        // 
        }},
    props: {
      patient: {
        type: Object,
        required: false,
        default: () => {
          return {
            patient_name: '',
            email: 'NaN',
            phone_number: '',
            gender: 'NaN',
            birthday: '',
            address: 'NaN',
            city: 'NaN',
            zipcode: 'NaN',
          };
        }
      }},
    methods: {
    async addPatient() {
      //   if (this.patient.patient_name === '' || this.patient.phone_number === '' || this.patient.birthday === '' ) {
      //   this.errorsPresent = true;
      // } else {
      //   console.log(this.patient)
      //   EventBus.$emit('createOrUpdate', this.patient);
      // }
      const res = await api.addpatient(this.patient);
      this.flash('patient added', 'success');
      alert('Added', res.patient.patient_name);
      
    }
  },
        
    }
</script>

<style>

</style>