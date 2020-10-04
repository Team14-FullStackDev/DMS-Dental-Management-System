<template>
  <div>
      <post-patient @createOrUpate="createOrUpate"></post-patient>
  </div>
</template>

<script>
import PostPatient from '@/components/PatientInfo/PostPatient.vue';
import { api } from '@/helpers/helpers';

export default {
    name: 'edit-patient',
    components: {
        PostPatient
    },
    data () {
        return {
            patient: {}
        };
    },
    methods: {
        createOrUpdate: async function(patient){
            await api.updatepatient(patient);
            this.flash('patient updated successfully', 'success');
            this.$router.push(`/patients/${patient._id}`);
        }
    }
}
</script>

<style>

</style>