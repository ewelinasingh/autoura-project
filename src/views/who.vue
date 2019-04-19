<template>
  <div class='container-fluid'>
    <div class='row'>
        <router-link to="/what?group=solo" class='col-sm-12 col-md-4 half-height solo'>
            <span>Solo</span>
        </router-link>
        <router-link to="/what?group=couple" class='col-sm-12 col-md-4 half-height couple'>
            <span>Couple</span>
        </router-link>
        <router-link to="/what?group=friends" class='col-sm-12 col-md-4 half-height friends'>
            <span>Friends</span>
        </router-link>
    </div>
    <div class='row'>
        <router-link to="/what?group=kids" class='col-sm-12 col-md-4 half-height kids'>
            <span>Kids</span>
        </router-link>
        <router-link to="/what?group=teenagers" class='col-sm-12 col-md-4 half-height teenagers'>
            <span>Teenagers</span>
        </router-link> 
        <router-link to="/what?group=group" class='col-sm-12 col-md-4 half-height group'>
            <span>Group</span>
        </router-link>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'app',
  metaInfo: {
      title: 'Autoura - Who',
      meta: [
      {charset: 'utf-8'},
      {name: 'description', content: 'Find your perfect dining experience with Autoura.'}
        ]
    }
}
</script>

<style lang="scss" scoped>

    .col-sm-12.col-md-4{
        border: 1px black solid;
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
        &.solo{
            background-image: url('../assets/solo-min.jpg');
        }
        &.couple{
            background-image: url('../assets/couple-min.jpg');
        }
        &.friends{
            background-image: url('../assets/friends-min.jpg');
        }
        &.kids{
            background-image: url('../assets/kids-min.jpg');
        }
        &.teenagers{
            background-image: url('../assets/teenagers-min.jpg');
        }
        &.group{
            background-image: url('../assets/group-min.jpg');
        }
    }
    
</style>
