<template>
    <div class="mainday">
        <div class="nightweather">
            <div class="title-pict">
            <div class="night-weather-title">
                <h3 class="night">{{cityinfo.name}}</h3>
                <p class="date night">{{getTimeNow()}}</p>
                <p class="temperature night">{{cityinfo.main.temp}}</p>
                <p class="decsription">{{cityinfo.weather.description}}</p>
            </div>
            <div class="weather-pict">
                <img src="@/assets/snow.png" alt="" srcset="">
            </div>
            </div>
            <div class="info">
                <div class="val">
                    <div class="coords flex">
                    <div>
                        <img src="@/assets/coords.png" alt="" srcset="">
                    </div>
                    <p>Координати</p>
                </div>
                <div class="moisture flex">
                    <div>
                        <img src="@/assets/moisture.png" alt="" srcset="">
                    </div>
                    <p>Відносна вологість</p>
                </div>
                <div class="pressure flex">
                    <div>
                        <img src="@/assets/pressure.png" alt="" srcset="">
                    </div>
                    <p>Атмосферний тиск</p>
                </div>
                <div class="sunset flex">
                    <div>
                        <img src="@/assets/sunset.png" alt="" srcset="">
                    </div>
                    <p>Час заходу сонця</p>
                </div>
                <div class="sunrise flex">
                    <div>
                        <img src="@/assets/sunrise.png" alt="" srcset="">
                    </div>
                    <p>Час сходу сонця</p>
                </div>
                </div>
                <div class="values">
                    <div class="p-flex">
                    <p>Ш: {{cityinfo.coord.lat}}</p>
                    <p>Д: {{cityinfo.coord.lon}}</p>
                    </div>
                    <p>{{cityinfo.main.humidity}}%</p>
                    <p>{{cityinfo.main.pressure}}гПа</p>
                    <p class="mr">{{sunset}}</p>
                    <p class="mr">{{sunrise}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NightWeather',
    data:()=>({
        cityinfo : [],
        sunrise : '',
        sunset : ''
    }),
    mounted(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            let city = this.$store.state.cityname
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8257a48b95160a334722d438cd94dd5`)
            .then((response)=>{
                return response.json();
            })
            .then((json) => {
                this.cityinfo = json;
                this.sunrise = new Date(this.cityinfo.sys.sunrise*1000);
                this.sunrise = this.sunrise.getHours() + ':'+ this.sunrise.getMinutes();
                this.sunset = new Date(this.cityinfo.sys.sunset*1000);
                this.sunset = this.sunset.getHours() + ':'+ this.sunset.getMinutes();
            })
        },
        getTimeNow(){
            let now = new Date()
            now = now.getDate() + '  ' + now.getMonth()
            return now
        }
    }
}
</script>

<style>
.night{
    color: #FFFFFF;
}
.mainday{
    width: 100%;
    height: 100%;
    background: linear-gradient(329.82deg, #071D65 18.38%, #05174F 81.62%);

}
.nightweather{
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 610px;
    height: 560px;

   background: linear-gradient(170.67deg, #051F71 7.05%, #071C5E 92.95%);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-sizing: border-box;
    border-radius: 20px;
}
.title-pict{
    display: flex;
}
.night-weather-title{
    width: 305px;
    height: 275px;
}
.mr{
    padding-top: 10px;
}
.date{
    font-size: 15px;
    line-height: 19px;
}
.temperature{
    line-height: 82px;
    font-size: 60px;
}
.description{
    line-height: 25px;
    font-size: 18px;
}
.weather-title p,
.info p{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    margin-top: 8px;
    margin-bottom: 8px ;
}
.weather-title h3{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #FFFFFF;
    margin-top: 3rem;
    margin-bottom: 8px ;
}
.info{
    display: flex;
    background: rgba(18, 69, 146, 0.14);
    border-radius: 15px;
    width: 570px;
    height: 244px;
    margin-left: auto;
    margin-right: auto;
}
.flex{
    display: flex;

}
.val{
    width: 60%;
}
.values{
    width: 40%;
}
p{
    font-size: 14px;
}
.p-flex{
    display: flex;
    justify-content:space-around;
}
</style>