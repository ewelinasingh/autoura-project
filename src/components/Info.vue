<template>
    <div class='info' v-if='stop !== null'>
        <h2>{{stop.name}}</h2>
        <p>{{stop.summary}}</p>
        <p>Next available date: {{stop.next_available_date}}</p>
        <p>Address: {{stop.location.address}} <br> {{stop.location.country}}</p>
        <p>{{stop.location.directions}}</p>
        <button class='btn btn-primary btn-lg' v-on:click='alertClick()'>Directions</button>
        <button class='btn btn-outline-primary btn-lg' :to="stop.website_url" v-if="stop.website_url !== ''">Visit Website</button>
    </div>
</template>

<script>
    export default {
        name: 'Map',
        props : ['stop'],
        methods:{
            alertClick: function(){
                alert("Alert pop up")
            }
        }
    }
</script>

<style>
    .info{
        height: 100%;
        width: 100%;
    }
</style>