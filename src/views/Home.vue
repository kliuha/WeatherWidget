<template>
  <div class="home">
    <h1 >Привіт!</h1>
    <p>Вкажи місто щоб отримати дані про погоду</p>
        <CityInput />
          <router-link to="/loading">
          <input type="button" value="Продовжити" class="btn btn-home">
        </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import CityInput from '@/components/CityInput.vue'


export default {
  name: 'Home',
  components: {
    CityInput,
  },
  methods:{
    getCityName(){
      console.log(this.$store.state.cityname)
      return this.$store.state.cityname
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
p{
font-weight: normal;
font-size: 22px;
line-height: 30px;
/* identical to box height */

text-align: center;
}
h1{
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  /* identical to box height */
  color: #222222;
}
.btn-home{
  margin-top: 8%;
}
</style>