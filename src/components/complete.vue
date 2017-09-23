<template>
	<div>
	complete
		<ul>
			<li v-for="(data,index) in completelist">
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

  name: 'complete',

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
  	...mapGetters(["completelist"])
  }
};
</script>

<style lang="scss" scoped>
.delActive{
	text-decoration: line-through;
}
</style>