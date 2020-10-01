<template>
    <div>
    <base-button block type="secondary" class="mb" @click="modals = true">
            + New Patient
          </base-button>

            <modal :show.sync="modals"
                  body-classes="p-0"
                  modal-classes="modal-dialog-centered modal-xl">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    
                    <template>
                        <form role="form">
                            <small>FULL NAME</small>
                            <base-input alternative
                                        class="mb-3"
                                        placeholder="eg. Jane Doe"
                                        addon-left-icon="ni ni-single-02"
                                        >
                            </base-input>
                            <small>PHONE NUMBER</small>
                            <base-input alternative
                                        type="password"
                                        placeholder="0XX XXX XXX"
                                        addon-left-icon="ni ni-tablet-button">
                            </base-input>
                            <small>BIRTHDAY</small>
                            <base-input alternative
                                        type="DATE"
                                        addon-left-icon="ni ni-calendar-grid-58">
                            </base-input> 
                            <small>TREATMENTS</small>
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
                            </base-dropdown>
                            <div class="text-center">
                                <base-button type="success" class="float-right">Save</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
    </div>
</template>

<script>
export default {
    name: 'post-record',
    data () {
        return {
             modals: false,
        // dummy treatment
        items: [
          { treatment: 'Root Canal'},
          { treatment: 'Cleaning'}
        ],
        addedTreatments: []
        // 
        }
        
    }
}
</script>

<style>

</style>