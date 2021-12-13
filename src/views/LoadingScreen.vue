<template>
    <div class="loading">
        <Spinner />
       {{this.redirect()}}
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'

export default {
    name: 'LoadingScreen',
    components: {
    Spinner,
  },
  methods:{
      redirect(){
          this.$router.push({name:'Home'})
      }
  }
}
</script>