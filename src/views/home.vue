<template>
  
  <div id='main' class='container-fluid'>
    <h1> AUTOURA </h1>
    <div class='row'>
      <div class='col-sm-12 col-md-6'>
        <h3> Log In</h3>
        <br>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">LOG IN</button>
        </form>
      </div>
      <div class='col-sm-12 col-md-6'>
        <router-link to="/who" class="btn btn-info btn-lg biggerbutton"> Enter without logging in </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>

  export default {
    name: 'app',
  }
  
</script>

<style lang="scss">

    h1{
        font-size: 5rem;
    }
    
    .col-sm-12.col-md-6{
      border: 1px solid black;
    }
    
    form{
      width: 20vw;
    }

</style>