<template>
  <div id="Fmenu" class="menuInnerMargin">
    <div id="fmenuHeader">
      <h3>Inbox</h3>
      <img src="../assets/AddContact_btn.png" alt="">
    </div>

    <div>
      <div class="FmenuText" v-for="elem in $store.getters.faceMenu" :key="elem.key">
          <span>{{elem[0]}}</span>
          </span>{{elem[1]}}</span>
      </div>
      <hr>
      <div class="FmenuText" v-for="elem in $store.getters.faceMenu2" :key="elem.key">
          <span>{{elem[0]}}</span>
          </span>{{elem[1]}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Fmenu extends Vue {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#fmenuHeader{
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
}
.FmenuText{
  color: #a0a4a7;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 0 10px;
  height: 30px;
  cursor: pointer;
}
.FmenuText:hover{
  background: #343c45;
  color: #fff;
  border-radius: 5px;
}
hr{
  margin: 25px 0;
}

</style>
