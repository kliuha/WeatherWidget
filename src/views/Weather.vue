<template>
    <div class="weather">
        <div v-if="this.$store.state.loading" class="load-spin">
            <Spinner />
        </div>
        <div v-else>
            <div v-if="getTimeNow() > 7 && getTimeNow() < 22">
                <DayWeather />
            </div>
            <div v-else>
                <NightWeather />
            </div>
        </div>
    </div>
</template>

<script>
import DayWeather from '@/components/DayWeather.vue'
import NightWeather from '@/components/NightWeather.vue'
import Spinner from '@/components/Spinner.vue'

export default {
    name: 'Weather',
    components: {
    DayWeather,
    NightWeather,
    Spinner
  },
   mounted(){
      this.loadingTime();
  },
  methods:{
        getTimeNow(){
            let timeNow = new Date();
            return  timeNow.getHours()
        },
        loadingTime(){
            this.$store.state.loading = true;
            setTimeout(()=>{
                this.$store.state.loading = false;
            },1000)
        }
  }
}
</script>


<style>
.load-spin{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    overflow: auto;
}
.load-spin *{
    margin: auto;
}
</style>