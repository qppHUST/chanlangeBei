<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">综合指数</el-menu-item>
      <el-menu-item index="2">动力煤指数</el-menu-item>
      <el-menu-item index="3">炼焦用煤指数</el-menu-item>
      <el-menu-item index="4">喷吹用精煤指数</el-menu-item>
      <el-menu-item index="5">化工用原料煤指数</el-menu-item>
      <el-menu-item index="6">代表规格品价格</el-menu-item>
      <el-menu-item index="7">单点品价格</el-menu-item>
      <el-menu-item index="10" style="float:right">发布声明</el-menu-item>
      <el-menu-item index="11" style="float:right">指数介绍</el-menu-item>
      <el-menu-item index="12" style="float:right">历史查询</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>