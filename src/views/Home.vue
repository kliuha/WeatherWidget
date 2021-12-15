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
          <transition name="fade">
              <p class="attention" v-if="show">Будь ласка впишіть назву міста</p>
          </transition>
        </div>

  </div>
</template>

<script>
import CityInput from '@/components/CityInput.vue'


export default {
  name: 'Home',
    data:() =>({
    show: false
  }),
  components: {
    CityInput,
  },
  methods:{
    getCityName(){
      return this.$store.state.cityname
    },
    showEmptyInput(){
      this.show = true;
      setTimeout(()=>{this.show = false;},2000)
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
.attention{
  color: rgb(180, 21, 21);
  font-family: Open Sans;
  font-style: normal;
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>