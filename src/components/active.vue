<template>
	<div>
	active
		<ul>
			<li v-for="(data,index) in activelist">
		        <input type="checkbox" v-model="data.isChecked"/>
		        <span :class="{delActive:data.isChecked}">{{data.text}}</span>
		        <button @click="del(data.listid)">del</button>
      		</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  name: 'active',

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
  	...mapGetters(["activelist"])
  }
};
</script>

<style lang="css" scoped>
</style>