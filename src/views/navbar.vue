<template>
  <div>
    <div id="burgerWrapper" class="flexi">
      <burger  />

    </div>
    <div id="iconsWrapper">
      <li v-for="(elem, index) in scrReaderWords" @click="changeActive(index)" :class="$store.getters.activeTab==index ? 'liActive' : ''" :key="index">{{elem}}<div></div></li>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import burger from '@/components/burger.vue'

@Component({
  components: {
    burger,
  },
})
export default class navbar extends Vue {
scrReaderWords = ["Whatsapp", "Movies", "Viber", "Skype", "Nchat"]

  changeActive(index:Number){
      this.$store.commit('resetSidenav', index)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/mainVars.scss';

#burgerWrapper{
  width: 100%;
  margin: 25px 0;
}
#iconsWrapper{
  margin-top: 60px;
}
#iconsWrapper li{
margin-top: 15px;
width: 60px;
height: 60px;
text-indent: $hideText;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
}

#iconsWrapper li div{
  background-image: url(../assets/navbar/icons.png);
  background-repeat: no-repeat;
  width: 36px;
  height: 38px;
}

.liActive{
  background: #282e36;
    border-radius: 20px;
}

$backPos: 0, -67px, -134px, -202px, -267px;

@for $i from 1 through 5 {
  #iconsWrapper li:nth-child(#{$i}) div{
    background-position-y: nth($backPos, $i)
  }
}
</style>
