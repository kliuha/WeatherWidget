<template>
    <div class="cityinp">
        <input type="text" placeholder="Наприклад, Копенгаген" v-model.trim="inptext"
         list="city-list" @input="inptext.length %2 == 0 ? inputCityName(inptext):'',setCityName(inptext)"
        >
        <template >
            <datalist id="city-list" class="datalist" >
                <option  v-for="cities in forAutoComplete " :key="cities" :value="cities"></option>
            </datalist>
        </template>
        <div v-if="getLoadingState">
            <Spinner />
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default{
    name : 'CityInput',
    components:{
        Spinner
    },
    data:() =>({
        forAutoComplete : [],
        inptext : '',
    }),
    methods: {
        inputCityName(city){
            this.$store.state.loading = true
            fetch(`https://emoney-test.alfabank.kiev.ua/app/geo.php?key=test_open_api_key_042&term=${city}`)
            .then((response)=>{
                this.$store.state.loading = false
                return response.json();
            })
            .then((json) => {
                this.forAutoComplete= json.list;
                //this.renderOptions()
                //console.log(this.$store.state.cityname)
            })
        },
        setCityName(city){
            this.$store.state.cityname = city;
        }
    },
    computed:{
        getLoadingState(){
            return this.$store.state.loading
        }
    }
}

</script>

<style>
input{
    background: #F1F1F1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 710px;
    height: 65px;
    left: 122px;
    top: 399px;
}
</style>