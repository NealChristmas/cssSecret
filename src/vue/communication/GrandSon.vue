<template lang="html">
  <div>我是grandSon
    <button @click="handleClick">触发事件,dispatch</button>
  </div>
</template>

<script>
import Emitter from "@/vue/utils/emitter.js"

export default {
  name:"grandson",
  mixins:[Emitter],
  created(){
    console.log("进来了")
    this.$on('on-message', this.showMessage);
  },
  methods:{
    showMessage (text) {
      window.alert(text);
    },
    handleClick(){
      this.dispatch("father","dady","dady收到了吗")
    },
    handleDispatch () {
      this.dispatch();  // ①
    },
    handleBroadcast () {
      this.broadcast();  // ②
    }
  }
}
</script>

<style lang="css" scoped>
</style>
