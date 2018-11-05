<template>
  <div class="modal-content">
    11
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class editMovie extends Vue {


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
