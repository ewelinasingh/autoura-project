<template>
  <div class='container-fluid'>
    <div class='row'>
        <div class='col-sm-12 col-md-6 full-height'>
            <ul class="list-group result"> 
              <li class="list-group-item oneresult" v-bind:class="{'list-group-item-action list-group-item-primary': stop.clickedOn == true }"  @click="resultClick(index)" @mouseover="resultOver(index)" @mouseleave="resultLeave(index)" v-for="(stop, index) in results">{{stop.name}}</li>
            </ul>
        </div>
        <div class='col-sm-12 col-md-6 full-height'>
            <div class='row' style='width:100%'>
                <div class='col-sm-12 col-md-12 half-height' style='width:100%'>
                    <Map :results="results" ref='theMap'/>
                </div>
                <div class='col-sm-12 col-md-12 half-height' style='width:100%'>
                    <Info :stop="clickedOn"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Map from '../components/Map.vue'
    import Info from '../components/Info.vue'
    
    export default {
      name: 'app',
      metaInfo: {
      title: 'Autoura - Results',
      meta: [
      {charset: 'utf-8'},
      {name: 'description', content: 'Find your perfect dining experience with Autoura.'}
        ]
      },
      components: {Map, Info},
      data: function(){
      return {
        results: [],
        normalIcon: [35, 35],
        largeIcon: [60, 60],
        clickedOn: null
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
              .map(r => {
                r.iconSize = this.normalIcon;
                return r;
              });
          }) 
          .catch(error=>{
              console.log('there was an error');
              console.log(error.message)
          })
      },
      methods: {
          resultOver: function(index){
            this.results[index].iconSize = this.largeIcon;
          },
          resultLeave: function(index){
            this.results[index].iconSize = this.normalIcon;
          },
          resultClick: function(index){
              console.log(this.$refs.theMap);
              for(let c = 0; c<this.results.length; c++) {
                this.results[c].clickedOn = false;
              }
              
              this.results[index].clickedOn = true;
            this.clickedOn = this.results[index];
            this.$refs.theMap.setClicked(index)
          }
      }
    }
    
    
</script>

<style lang="scss" scoped>
   
   .result{
       overflow-y: scroll;
       height: 100%;
       width: 100%;
       cursor: pointer;
   }
   
   .oneresult:hover{
     background: #e6f2ff;
   }

</style>