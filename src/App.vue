<template>
  <div id="app">
    <p><input type="text" name="" value="" placeholder="待办项目" @keyup.enter="addlist(listid,$event)" /></p>
    <router-link to="/all" activeClass="active">all</router-link>
    <router-link to="/active" activeClass="active">active</router-link>
    <router-link to="/complete" activeClass="active">complete</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'app',

  methods:{
    addlist(id,ev){

      this.$store.commit("add",{listid:id,text:ev.target.value,isChecked:false});
      ev.target.value = "";
    }
  },

  computed:{
    ...mapState(["listid"])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 500px;
  margin: 100px auto;
  text-align: center;
  a{
    text-decoration: none;
  }
  .active{
    color: red;
  }
  li{
    list-style: none;
  }
}
</style>
