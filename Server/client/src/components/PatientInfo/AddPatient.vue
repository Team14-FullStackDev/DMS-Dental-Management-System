<template>
  <div>
      <post-patient @createOrUpdate="createOrUpdate(patient)"></post-patient>
  </div>
</template>

<script>
import PostPatient from './PostPatient';
import { api } from '@/helpers/helpers';
import { EventBus } from '@/helpers/event-bus.js';

export default {
    name: 'new-patient',
    components: {
        PostPatient
    },
    mounted () {
        EventBus.$on('createOrUpdate', async function (patient){
            const res = await api.addpatient(patient);
            this.flash('patient added', 'success');
            this.$router.push(`/patients/${res.id}`);
            console.log('addedpatient')
            console.log(patient)
        })
    }
}
</script>

<style>

</style>