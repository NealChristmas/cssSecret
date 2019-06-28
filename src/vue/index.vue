<template lang="html">
    <div class="vue-container">
      jofi
      <div class="list"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  created(){
    console.log(123);
  }
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
