<template>
  <div class='container-fluid'>
    <div class='row'>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=street'" class='col-sm-12 col-md-4 third-height street'>
            <span>Street</span>
        </router-link>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=popup'" class='col-sm-12 col-md-4 third-height popup'>
            <span>Pop Up</span>
        </router-link>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=speciality'" class='col-sm-12 col-md-4 third-height speciality'>
            <span>Speciality</span>
        </router-link>
    </div>
    <div class='row'>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=cafe'" class='col-sm-12 col-md-4 third-height cafe'>
            <span>Café</span>
        </router-link>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=restaurant'" class='col-sm-12 col-md-4 third-height restaurant'>
            <span>Restaurant</span>
        </router-link> 
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=fastfood'" class='col-sm-12 col-md-4 third-height fastfood'>
            <span>Fastfood</span>
        </router-link>
    </div>
    <div class='row'>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=allnight'" class='col-sm-12 col-md-4 third-height allnight'>
            <span>All Night</span>
        </router-link>
        <router-link :to="'/results?group=' + this.$route.query.group + '&type=tour'" class='col-sm-12 col-md-4 third-height tours'>
            <span>Tours</span>
        </router-link> 
        <router-link to="/who" class='col-sm-12 col-md-4 third-height back'>
            <span>Back</span>
        </router-link>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">

    .col-sm-12.col-md-4{
        border: 1px black solid;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        color: #fff;
        &:hover:before {
            background: rgba(0,0,0,0.3);
        }
        &:before {
            transition: 0.5s all ease;
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0,0,0,0.5);
        }
         > * {
            position: relative;
            z-index: 2;
            font-size: 2.5rem;
        }
        &.street{
            background-image: url('../assets/street.jpg');
        }
        &.restaurant{
            background-image: url('../assets/restaurant.jpg');
        }
        &.cafe{
            background-image: url('../assets/cafe.jpg');
        }
        &.popup{
            background-image: url('../assets/popup.jpg');
        }
        &.fastfood{
            background-image: url('../assets/fastfood.jpg');
        }
        &.allnight{
            background-image: url('../assets/allnight.jpg');
        }
        &.speciality{
            background-image: url('../assets/speciality.jpg');
        }
        &.tours{
            background-image: url('../assets/tour.jpg');
        }
        &.back{
            background-image: url('../assets/back.jpg');
        }
        
    }
    
</style>