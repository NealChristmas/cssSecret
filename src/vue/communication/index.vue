<template lang="html">
  <div>
    我是爷爷
    <Son></Son>
  </div>

</template>

<script>
import Emitter from "@/vue/utils/emitter.js"
import Son from "./Son.vue"

export default {
  name:"grandFather",
  components:{
    Son
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
