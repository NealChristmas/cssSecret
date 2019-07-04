<template lang="html">
    <div class="vue-container">
      <button @click="handleClick">触发事件,broadcast</button>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Emitter from "@/vue/utils/emitter.js"
export default {
  name:"father",
  mixins:[Emitter],
  created(){
    console.log(123);
    this.$on('dady', this.showMessage);
  },
  methods:{
    showMessage(d){
      console.log(d)
    },
    handleClick () {
        this.broadcast('son', 'on-message', 'Hello Vue.js');
    },
    handleDispatch () {
      this.dispatch();  // ①
    },
    handleBroadcast () {
      this.broadcast();  // ②
    }
  },

}
</script>

<style lang="scss" scoped>
  .vue-container{
    color: pink;
    .list{
      // background: red;
      // height: 100px;
    }
  }
</style>
