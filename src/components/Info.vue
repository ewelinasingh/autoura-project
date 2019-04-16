<template>
    <div class='info' v-if='stop !== null'>
     
        <h2>{{stop.name}}</h2>
        <p>{{stop.summary}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Map',
        props : ['stop']
    }
</script>

<style>
    
</style>