<template>
  
  <div class='full-height'>
    <router-view/>
  </div>
  
</template>

<script>

export default {
  name: 'app',
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lora');
  
  body {
    font-family: 'Lora', serif !important; 
  }
  
  .biggerbutton{
    font-size: 5rem;
  }
  
  .full-height{
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .threequarters-height{
    height: 75vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .half-height{
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .third-height{
    height: 33.333vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .quarter-height{
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
</style>
