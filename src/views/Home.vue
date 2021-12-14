<template>
  <div class="home">
    <h1 >Привіт!</h1>
    <p class="p-home">Вкажи місто щоб отримати дані про погоду</p>
        <CityInput />
        <div v-if="$store.state.cityname">
          <router-link to="/weather">
          <input type="button" value="Продовжити" class="btn btn-home">
          </router-link>
        </div>
        <div v-else-if="!$store.state.cityname">
          <input type="button" value="Продовжити" class="btn btn-home" v-on:click="showEmptyInput()">
        </div>

  </div>
</template>

<script>
import CityInput from '@/components/CityInput.vue'


export default {
  name: 'Home',
  components: {
    CityInput,
  },
  methods:{
    getCityName(){
      return this.$store.state.cityname
    },
    showEmptyInput(){
      alert('Введіть назву міста')
    }
  }
}
</script>

<style>
.home{
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Open Sans;
  font-style: normal;
}
.p-home{
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
}

h1{
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: #222222;
}
.btn-home{
  margin-top: 8%;
}
</style>