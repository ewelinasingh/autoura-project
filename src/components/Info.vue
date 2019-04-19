<template>
    <div class='info' v-if='stop !== null'>
        <h2>{{stop.name}}</h2>
        <p>{{stop.summary}}</p>
        <p>Next available date: {{stop.next_available_date}}</p>
        <p>Address: {{stop.location.address}} <br> {{stop.location.country}}</p>
        <p>{{stop.location.directions}}</p>
        <button class='btn btn-primary btn-lg' v-on:click='alertClick()'>Directions</button>
        <a :href="stop.website_url" class='btn btn-outline-primary btn-lg' v-if="stop.website_url !== ''">Visit Website</a>
    </div>
</template>

<script>
    export default {
        name: 'Map',
        props : ['stop'],
        methods:{
            alertClick: function(){
                alert("This button would take the user to a map which would navigate them to the location.")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .info{
        height: 100%;
        width: 100%;
    }
</style>