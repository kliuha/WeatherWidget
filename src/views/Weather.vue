<template>
    <div class="weather">
        <div v-if="getTimeNow() > 7 && getTimeNow() < 22">
        <DayWeather />
        </div>
        <div v-else>
        <NightWeather />
        </div>
        <router-link class="route-back" to='/'> Повернутись назад</router-link>
    </div>
</template>

<script>
import DayWeather from '@/components/DayWeather.vue'
import NightWeather from '@/components/NightWeather.vue'

export default {
    name: 'Weather',
    components: {
    DayWeather,
    NightWeather
  },
  methods:{
      getTimeNow(){
            let timeNow = new Date();
            return  timeNow.getHours()
        }
  }
}
</script>

<style>
.route-back{
    padding-top: 50px;
}
</style>
