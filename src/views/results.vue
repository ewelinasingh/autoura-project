<template>
  
  <div class='container-fluid'>
    <div class='row'>
        <div class='col-sm-12 col-md-6 full-height borders'>
            <ul class="list-group result">
              <li class="list-group-item" v-for="(stop, index) in results">{{stop.name}}</li>
            </ul>
        </div>
        <div class='col-sm-12 col-md-6 full-height borders'>
            <div class='row' style='width:100%'>
                <div class='col-sm-12 col-md-12 half-height borders' style='width:100%'>
                    <Map/>
                </div>
                <div class='col-sm-12 col-md-12 half-height borders' style='width:100%'>
                    hey
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
    import axios from 'axios'
    import Map from '../components/Map.vue'
    
    export default {
      name: 'app',
      components: {Map},
      data: function(){
      return {
        results: [],
      }
    },
    
      created(){
          console.log(this.$route.query)
          var config = {
            headers: {'Authorization': "Bearer dd99a666aa652f5c3a84fa8c771223"}   
          };
          axios.get('https://api.autoura.com/api/stops/search?group_context=' + this.$route.query.group + '&stop_types=food', config)
          .then(r=>{
              console.log(r)
              this.results=r.data.response.filter(r => r.stop_type == 'food-' + this.$route.query.type)
          }) 
          .catch(error=>{
              console.log('there was an error');
              console.log(error.message)
          })
      }
    }
    
    
</script>

<style lang="scss">

   .borders{
       border: 1px solid black;
   }
   
   .result{
       overflow-y: scroll;
       height: 100%;
       width: 100%;
   }

</style>