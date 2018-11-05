<template>

    <div id="burger-container" @click="clickedbtn" :class="$store.getters.sidenav ? `open` : ``">
      <div id="burger"><span> </span><span> </span><span> </span><span> </span></div>
    </div>

</template>

<script>
export default {
  name: 'burger',
  data () {
    return {

    }
  },
  methods: {
    clickedbtn(){
      this.$store.commit('setSidenav', !this.$store.getters.sidenav)
      // console.log('burger', this.$store.getters.sidenav);
    },


  },

}
</script>

<style scoped lang="scss">
@import '@/assets/mainVars.scss';


#burger-container{
    position: relative;
    // margin: 0 auto;
    width: 30px;
}

#burger{
    cursor: pointer;
    display: block;
}

#burger span{
    /* background: #eee; */
    background: $burgerBack;
    display: block;
    width: 30px;
    height: 5px;
    margin-bottom: 3px;
    position: relative;
    top: 0;
    transition: all ease-in-out 0.4s;
}

#burger-container.open span:nth-child(2),
#burger-container.open span:nth-child(3){
    width: 0;
    opacity: 0;
}

#burger-container.open span:nth-child(4){
    transform: rotate(45deg);
    top: -12.5px;
}

#burger-container.open span:nth-child(1){
    transform: rotate(-45deg);
    top: 12px;
}

</style>
