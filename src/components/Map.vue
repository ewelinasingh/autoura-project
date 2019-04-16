<template>
  
  <div class="map">
    <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :key="index" v-for="(stop, index) in results" :lat-lng="latLng(stop.location.geocode.lat, stop.location.geocode.lng)">
        <l-icon :icon-size="stop.iconSize" :icon-url="icon"> 
        </l-icon>
      </l-marker>
    </l-map>
  </div>
  
</template>

<script>

  import {LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
  
  import foodicon from '../assets/food.png'
  
  export default {
    name: 'Map',
    props: {
      results: Array
    },
    data: function(){
        return {
            zoom: 11,
            center: L.latLng(51.5074, 0.1278),
            currentCenter: L.latLng(34.219246, -111,922295),
            currentZoom: 11,
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=bedd86692b784529a8001f6271a012d5',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(47.413220, -1.219482),
            icon: foodicon,
            iconSize: [25,25],
          }
        },
        
        components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon
        },
        
        methods: {
            latLng: function(lat, lng){
                return L.latLng(lat, lng);
            },
            
            centerUpdate: function(center) {
                this.currentCenter = center
            },
            
            zoomUpdate: function(zoom) {
                this.currentZoom = zoom
            },
            processPosition(gpspos){
              this.center = L.latLng(gpspos.coords.latitude, gpspos.coords.longitude)
       
            },
            handleError() {
              console.log("Error has occured with GPS")
            },
            setClicked(index) {
              this.zoom = 15;
              this.center = L.latLng(this.results[index].location.geocode.lat, this.results[index].location.geocode.lng)
            }
        },
        created(){
          if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition (this.processPosition, this.handleError);
          }
          else{
              alert("Sorry, geolocation not supported in this browser");
          }
          
        }
    }
  
  
  
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map{
        height: 100%;
        width: 100%;
    }
</style>
