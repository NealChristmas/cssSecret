<template lang="html">
  <div>
    我是儿子
    <GrandSon></GrandSon>
  </div>

</template>

<script>
import Emitter from "@/vue/utils/emitter.js"
import GrandSon from "./GrandSon.vue"
export default {
  name:"son",
  components:{
    GrandSon
  },
  mixins:[Emitter],
  created(){
    console.log("进来了")
    this.$on('on-message', this.showMessage);
  },
  methods:{
    showMessage (text) {
      window.alert(text);
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
