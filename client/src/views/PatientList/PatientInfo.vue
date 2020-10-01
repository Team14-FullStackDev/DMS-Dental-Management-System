<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     >
            <!-- Mask -->
            <span class="mask bg-gradient-info opacity-8"></span>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0 ml-1">
                    <div class="card card-profile shadow" style="height:23rem;">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="img/theme/team-4-800x800.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div class=" justify-content-between">
                                <base-button size="sm" type="default" class="float-right">Edit Patient</base-button>
                            </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4 mt-5">
                            <div class="row">
                                <div class="col">
                                    <div class="text-center">
                                        <h3>
                                            Jessica Jones<span class="font-weight-light">, 27</span>
                                        </h3>
                                        <div class="h5 font-weight-300">
                                            <i class="ni location_pin mr-2"></i>jessicaj@gmail.com
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-center">
                                    <h4 >Appointments</h4>
                                </div>
                                <div class="w-100"></div>
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt--3">
                                        <div class="pl-5 pr-5" style="border-right: 1px solid #c4c4c4;">
                                            <span class="heading">22</span>
                                            <span class="description" >Past</span>
                                        </div>
                                        <div>
                                            <span class="heading">10</span>
                                            <span class="description">Up Coming</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0 mr--2 ml--2">
                    <div class="card shadow" style="height:23rem;">
                        <div class="card-body">
                            <div class="row pt-2">
                                <div class="col ">
                                    <div class="text-center">
                                        <h4>Gender</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-center">
                                        <h4>Birthday</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-center">
                                        <h4>Phone Number</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="w-100"> <hr> </div>
                                <div class="col">
                                    <div class="text-center">
                                        <h4>Street Address</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-center">
                                        <h4>City</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-center">
                                        <h4>Zip Code</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                
                                <div class="w-100"><hr></div>
                                
                                <div class="col-sm-4">
                                    <div class="text-center">
                                        <h4>Register date</h4>
                                        <div class="h5 font-weight-300">Male</div>
                                    </div>
                                </div>
                                <div class="w-100 mt-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card shadow" style="height:23rem;">
                        <div class="card-body">
                            <div class="row pt-2">
                                <div class="col">
                                    <div class="text-left">
                                        <h2>Note</h2>
                                    </div>
                                    <div>
                                        <ul class="note-list">
                                            <li v-for="note in notes" :key="note">
                                                <input
                                                    
                                                    v-if="note.edit"
                                                    v-model="note.title"
                                                    @blur="note.edit = false; $emit('update')"
                                                    @keyup.enter="note.edit=false; $emit('update')"
                                                    v-focus
                                                >
                                                <div v-else>
                                                    <label @click="note.edit = true;"> {{note.text}} </label>
                                                </div>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8 order-xl-2 mt-4">
                    <div class="card shadow" style="height:23rem; width: 99.5%">
                        <div class="card-body">
                            <div class="row pt-2">
                                <div class="col">
                                    <div class="text-left">
                                        <h2>RECENT TREATMENTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="card shadow mb-2" v-for="patient in recentTreatments" :key="patient" >
                                <div class="row mt-4 mb-4 pl-4 pr-4 p-3 ">
                                    <div v-for="detail in patient.patient" :key="detail">
                                        <span class="col">{{detail.date}}</span>
                                        <span class="col">{{detail.treatment}}</span>
                                        <span class="col">{{detail.dentist}}</span>
                                        <span class="col">{{detail.nurse}}</span>
                                        <span></span>
                                    </div>
                                    <base-button class="ml-5 mt--1 pt-2 pb-2" size="sm" type="info">+ Invoice</base-button>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                    <div class="col-xl-4 order-xl-2 mt-4 ml--2">
                    <div class="card shadow" style="height:23rem;">
                        <div class="card-body">
                            <div class="row pt-2">
                                <div class="col">
                                    <div class="text-left">
                                        <h2>File/Documents</h2>
                                    </div>
                                    <div>
                                        <ul class="note-list">
                                            <li v-for="note in notes" :key="note">
                                                <input
                                                    
                                                    v-if="note.edit"
                                                    v-model="note.title"
                                                    @blur="note.edit = false; $emit('update')"
                                                    @keyup.enter="note.edit=false; $emit('update')"
                                                    v-focus
                                                >
                                                <div v-else>
                                                    <label @click="note.edit = true;"> {{note.text}} </label>
                                                </div>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

</template>

<script>

export default {
    data() {
        return {
    notes: [
      { text: 'This patient is consectetur adipiscing elit. Cras eleifend.', edit: false },
      { text: 'X-ray ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend.', edit: false },
      { text: 'Sed eu lacus sed justo elementum scelerisque lacus.', edit: false }
    ],
    editedNote: null,
    message: 'Hello Vue.js!',
    recentTreatments: [{
                patient: [
                    {date: 'DD/MM/YYYY'},
                    {treatment: 'Cleaning'},
                    {dentist: 'Dr. Ztrange'},
                    {nurse: 'Ms. Enola'}
                ],  
                },
                {
                patient: [
                    {date: 'DD/MM/YYYY'},
                    {treatment: 'Cleaning'},
                    {dentist: 'Dr. Ztrange'},
                    {nurse: 'Ms. Enola'}
                ],  
                }
            ],
    }},
    methods: {
    editNote: function (note) {
      this.editedNote = note
        }
    },
    directives: {
        focus: {
        inserted (el) {
            el.focus()
        }
        }
    }
}
</script>

<style>

</style>