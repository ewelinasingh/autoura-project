<template>
    <div class='info' v-if='stop !== null'>
     
        <h2>{{stop.name}}</h2>
        <p>{{stop.summary}}</p>
        <p>Next available date: {{stop.next_available_date}}</p>
        <p>Address: {{stop.location.address}} <br> {{stop.location.country}}</p>
        <p>{{stop.location.directions}}</p>
        <p>{{stop.website_url}} </p>
        
    </div>
</template>

<script>
    export default {
        name: 'Map',
        props : ['stop']
    }
</script>

<style>
    .info{
        height: 100%;
        width: 100%;
    }
</style>