<template>
	<div>
  all
		<ul>
			<li v-for="(data,index) in list">
        <input type="checkbox" v-model="data.isChecked"/>
        <span :class="{delActive:data.isChecked}">{{data.text}}</span>
        <button @click="del(data.listid)">del</button>
      </li>
		</ul>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {

  name: 'all',

  data () {
    return {
      
    };
  },

  methods:{
    del(index){
      this.$store.commit("del",index);
    }
  },

  computed:{
    ...mapState(["list"])
  }

};
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
.delActive{
  text-decoration: line-through;
}
</style>