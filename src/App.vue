<template>
  <div id="app" >

    <div id="nav" class="flexi">
      <navbar />
    </div>
    <div id="body">
      <!-- <router-link to="/Facebook">Facebook</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view/>
    </div>

  </div>
</template>



<style lang="scss">

@import './assets/main.css';
@import './assets/modal.scss';
@import './assets/mainVars.scss';




#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
#nav {
  width: $navWidth;
  height: 100%;
  background: $navBack;
  
}
#body{
  float: left;
  flex:1;
  height: 100%;
  background: red;
}
</style>
