<template>
    <div class="error">
        <img src="@/assets/error-png.png" alt="error">
        <p>Нажаль, ми не знайшли інформації по даному запиту :(</p>
        <router-link to="/">
            <input type="button" value="повернутись назад" class="btn">
        </router-link>
    </div>
</template>

<script>
export default {
    name : 'Error'
}
</script>

<style>
.error{
    font-family: Open Sans;
    font-style: normal;
}
.btn{
    width: 264px;
    height: 60px;
    top: 607px;
    background: #000AFF;
    border-radius: 4px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
}
</style>