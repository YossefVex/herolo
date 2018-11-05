<template>
  <div class="container">
    <!-- MODAL  -->
    <div :class="currentIndex==-1 ? 'modal': 'modal modal-show'">
      <div class="modal-content flexi">
        <img :src="currentMovie.Poster" alt="">
        <div class="formWrapper">
          <div class="inputsWrapper">
            <div id="title_input">
              <!-- {{currentMovie ? currentMovie.Title.length : ''}} -->
              <label for="">Title</label>
              <input type="text"  id="titleLabel" v-model="currentMovie.Title" @input="editDet('title')">
              <label class="error" v-if="titleValid==2" for="titleLabel">Please enter a movie title</label>
              <label class="error" v-else-if="titleValid==1" for="titleLabel">Duplicate movie title</label>

            </div>
            <div  id="year_input">
              <label for="">Year</label>
              <input type="text" id="yearLabel" v-model="currentMovie.Year" @input="editDet('year')">
              <label class="error" v-if="yearValid==1" for="yearLabel">Please enter a year</label>
            </div>
          </div>
          <div class="flexi">


            <button type="button" class="btn danger" @click="closeModal" >Cancel</button>
            <button type="button" :disabled="sumbitDisabled" class="btn success" @click="submitModal">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div :class="deleteModal==false ? 'modal': 'modal modal-show'">
      <div class="modal-content flexi">
        <div class="formWrapper">
          <div class="inputsWrapper">
            <div id="delete_title_input">
              <label>Are you sure you want do delete current movie ?</label>
            </div>
          </div>
          <div class="flexi">
            <button type="button" class="btn danger" @click="deleteModal=false">Cancel</button>
            <button type="button" :disabled="sumbitDisabled" class="btn success" @click="deleteMovie()">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Movie List -->
    <div id="Fconv">
      <div id="fconvHeader"class="flexi">
          <div class="searchContainer">
            <img src="../assets/Search.png" alt="">
            <input autocomplete="off" class="searchBox" type="search" name="search" placeholder="Search...">
        </div>
      </div>
      <hr>
      <div id="conv" class="menuInnerMargin">
        <div class="convBox" v-for="(elem, index) in $store.getters.movieList" @click="changeCurrentMovie(index, elem)" :key="elem.key">
          <div class="convText">
            <img :src="elem.Poster" width="50px" height="70px" alt="">
            <div id="convCenter">
              <div><span>{{elem.Title}}</span><span id="yearSpan">{{ elem.Year | str2OnlyNum }}<span @click.stop="deleteIndex =index; deleteModal = true;">x</span></span></div>
              <span># {{elem.imdbID}}</span>
            </div>
            <div id="convRight">
              <span></span>
              <!-- <span>5 min</span> -->
            </div>
          </div>
          <hr>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Fconv extends Vue {
currentMovie:any = {}
currentIndex = -1
titleValid = 0
yearValid = 0
sumbitDisabled = false
deleteModal = false
deleteIndex = -1;

deleteMovie(index){
  this.$store.commit('deleteMovie', this.deleteIndex)
  this.deleteIndex = -1
  this.deleteModal = false
}

changeCurrentMovie(index:number, movie:object){
  this.currentMovie = JSON.parse(JSON.stringify(movie));
  this.currentIndex = index
}
closeModal(){
  this.sumbitDisabled = false
  this.currentIndex = -1
}
checkDupName(){
  let ans = false
  this.$store.getters.movieList.filter((el:any)=>{
      if (!ans && this.currentMovie.Title.toLowerCase()!=this.$store.getters.movieList[this.currentIndex]["Title"].toLowerCase())
      ans = el.Title.toLowerCase()==this.currentMovie.Title.toLowerCase() ? true : false
    })

    return ans
}
editDet(sender:String){
  if(sender=='title'){
    this.titleValid = 0

      if(this.currentMovie.Title.length<1){
        // Movie name empty
        this.titleValid = 2
        this.sumbitDisabled = true
      }
      else if(this.checkDupName()){
        this.titleValid = 1
        this.sumbitDisabled = true
      } else {
        this.titleValid = 0
        this.sumbitDisabled = false
      }

  } else {
    this.sumbitDisabled = Boolean(this.yearValid = this.currentMovie.Year.length<1 ? 1 : 0)
  }
}

submitModal(){
  let obj = {
    movie: this.currentMovie,
    index: this.currentIndex
  }
  this.$store.commit('changeMovie', obj)
  this.currentIndex = -1

}


}
</script>


<style scoped lang="scss">
@import '@/assets/mainVars.scss';

#Fconv{
  display: flex;
  flex-direction: column;
  height: 100%;
}
#Fconv > hr{
  width: 100%;
  margin: 15px 0 0 0;
}
#fconHeader{
      margin-bottom: 30px;
}
.searchContainer{
  display:inline-flex;
  align-items: center;
  background: #363d45;
  border-radius: 20px;
  height: 40px;
  width: 80%;
  margin: 15px 0;

}
.searchContainer img{
  margin: 0 15px;
}
.searchContainer input{
  all: unset;
  color: #868b8e;
}
.convBox{
  margin: 20px 0;
  cursor: pointer;
  transition: 0.5s;
}
.convBox:hover{
  background: #353a42;
border-radius: 5px;
padding: 10px 10px;
}
.convText{
  display: flex;
}
.convText > img{
  margin-right: 15px;
}
.convText > div:first-child{
  width: 60%;
}
#conv{
      overflow-y: scroll;
}
#conv::-webkit-scrollbar {
    display: none;
}
#convCenter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
#convCenter > div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

#convCenter > div > span, #convRight > span:nth-of-type(1){
  color: #fff;
}
#convCenter > span{
  color: #777;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  width: 100%;
}
#conv hr{
  width: 50px;
  margin: 25px 0 0 0 !important;
}



.modal-content{
  background: rgba(255,255,255,0.8);
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: $phones) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
  }
}
.modal-content input:focus{
  box-shadow: 0 0 3pt 1pt #6763dd;
  outline: none;
}
.modal-content img{
    @media only screen and (max-width: $phones) {
  height: 400px;
}
}
#year_input, #title_input{
  position: relative;
}
.formWrapper{
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.inputsWrapper{
  margin-bottom: 15px;
}
.inputsWrapper div{
margin-bottom: 20px;
}

.danger{
  margin-right: 5px;
}
.error{
  top: 62px;
  left: 10px;
}

#yearSpan{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
#yearSpan > span{
  position: absolute;
  top: 51px;
  left: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 1px 5px;
  cursor: pointer;
}
#delete_title_input{
      text-align: center;
}
#delete_title_input > label{
  font-size: 24px;
  color: red;
  font-weight: 600;
}
</style>
