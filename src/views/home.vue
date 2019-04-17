<template>
  
  <div id='main' class='container-fluid'>
    <div class="top-section">
          <p><b>{{ info.name }}, {{ info.sys.country }}</b></p>
          <p>{{ info.main.temp }}&deg;C</p>
    </div>  
    <div class='main-section'>
      <h1> AUTOURA </h1>
      <br>
      <router-link to="/who" class="btn btn-info btn-lg biggerbutton"> Enter </router-link>
    </div>
    
    <div class="quote" v-if="quote !==null">
      <span v-html="quote"> </span> - {{quoter}}
    </div>
        
  </div>
  
</template>

<script>

  import axios from 'axios'
    
  export default {
   name: 'app',
   data: function(){
     return {
       quote: null,
       quoter: null,
       info: null
     }
   },
   mounted () {
        axios
         .get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=5391b57eadffcb9ee8d5647ebe4534fd')
         .then(response => (this.info = response.data))
   },
   created(){
     
        axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(r=>{
          this.quote = r.data[0].content
          this.quoter = r.data[0].title
            console.log(r)
        }) 
        .catch(error=>{
            console.log('there was an error');
            console.log(error.message)
        })
        
    }
  }
  
  
  
</script>

<style lang="scss" scoped>

    h1{
        font-size: 3rem;
    }
    
    .quote{
        display: flex;
        flex-direction: column;
        
    }
    
    .top-section{
        display: flex;
        flex-direction: column;
    }

</style>



