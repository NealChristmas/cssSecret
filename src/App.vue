<template lang="html">
  <div>home pagekjsfjdskj
    <router-view></router-view>
  </div>


</template>

<script>
import Emitter from "@/vue/utils/emitter.js"
export default {
  mixins:[Emitter],
  name:"root",
  created(){
    console.log("root")

    this.broadcast('child', 'on-message', 'Hello Vue.js');

  }
}
</script>

<style lang="css" scoped>
</style>
