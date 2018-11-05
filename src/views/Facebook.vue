<template>
  <div id="Facebook">
    <transition name="slide-fade">

    <div v-if="$store.getters.activeTab==0" id="menuWrapper" class="gradBG">
      <Fmenu />
    </div>

      <div v-if="$store.getters.activeTab==1" id="convWrapper" class="gradBG">
        <Fconv />
      </div>
    </transition>

  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Fmenu from '@/components/Fmenu.vue'
import Fconv from '@/components/Fconv.vue'


@Component({
  components: {
    Fmenu, Fconv
  },
})
export default class Facebook extends Vue {

mounted () {
  // stimulate the ajax
  // this.$store.commit('setfaceUsers', this.ajaxUsers)

  this.axios.get('http://www.omdbapi.com/?s=stars&apikey=6f6874d5').then((res) => {
    if (res && res.data && res.data.Search && res.data.Search.length > 0){
      console.log(res.data.Search)
      this.$store.commit('setMovies', res.data.Search)
    }
  })

  }
}
</script>

<style scoped lang="scss">




.slide-fade-enter-active {
  transition: all .3s;
      // width: 310px;
}
// .slide-fade-leave-active {
//   transition: all .8s;
//   width: 0;
// }
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: translateX(-310px);
}


#Facebook{
  background: #292f35;
  width: 100%;
  height: 100%;
  display: flex;
}

#menuWrapper{
width: 230px;
height: 100%;

}
#convWrapper{
  width: 310px;
}


</style>
