import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class user{
  id:number
  name: String
  avatar: String
  isOnline: boolean
  cons: object
  constructor(id: number, name: String, avatar: String, isOnline: boolean, cons: object){
    this.id = id
    this.name = name;
    this.avatar = avatar;
    this.isOnline = isOnline;
    this.cons = cons;

  }
}
class msg{
  time: Date
  txt: String
  constructor(time: Date, txt:String){
    this.time = time;
    this.txt = txt;
  }
}

export default new Vuex.Store({
  state: {
    sidenav: false,
    activeTab: -1,
    movieList: [],
    faceMenu:[['All Movies', 102], ['Horror', 89], ['Action', 6], ['Romance', 7]],
    faceMenu2:[['Seen', 21], ['New', 89], ['Old', 6], ['B & W', 7]],
  },
  getters:{
    sidenav(state){
      return state.sidenav
    },
    activeTab(state){
      return state.activeTab
    },
    movieList(state){
      return state.movieList
    },
    faceMenu(state){
      return state.faceMenu
    },
    faceMenu2(state){
      return state.faceMenu2
    },
  },
  mutations: {
    // when getting from server
    setSidenav(state, payload){
      state.sidenav = false
      state.activeTab = -1
    },
    resetSidenav(state, payload){
      state.sidenav = true
      state.activeTab = payload
      console.log(state.activeTab)
    },


    // set facebook users with ajax onload
    setMovies(state: any, payload: any){
        state.movieList = [...payload]
        console.log(state.movieList)
    },
    deleteMovie(state: any, payload: any){
        state.movieList.splice(payload, 1)
    },



    // add user or conversation
    changeMovie(state: any, payload: any){
      state.movieList[payload.index] = payload.movie
    },
    addfaceMsg(state, payload){
      // if(state.faceUsers.indexof(payload.id)!=-1)
      //       state.faceUsers[payload.id].cons.push(payload.msg)
    },

  },
  actions: {
    setSidenav(context, payload){
      context.commit('setSidenav', payload) },
    resetSidenav(context, payload){
      context.commit('resetSidenav', payload) },
    setMovies(context, payload){
      context.commit('setMovies', payload) },
    deleteMovie(context, payload){
      context.commit('deleteMovie', payload) },
    changeMovie(context, payload){
      context.commit('changeMovie', payload) },
    addfaceMsg(context, payload){
      context.commit('addfaceMsg', payload) },

    },

})
