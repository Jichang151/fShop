<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/records">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/login">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }

}
</script>

<style>

/* .box{
  width:100%;
  height:100px;
  background-color:red;
  text-align:center;

}
@media (max-width:500px){
  .box{
    width:200px;
    height:100px;
    background-color:#0f0;
  }
} */
</style>
