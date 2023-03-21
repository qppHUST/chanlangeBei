<template>
  <div class="itemContainer">
    <div style="float:left">
      <img src= "../../assets/static/img/quotation.png" style="width:2rem">
    </div>
    <div style="float:left;margin-left: 1rem;">
      <div>
        查行情
      </div>
      <div>
        CHAOHANGQNG
      </div>
    </div>
    <div style="float:right" @click="toDetail()">
      <img src="../../assets/static/img/more.png" width="10rem">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toDetail(){
        this.$router.replace("/detail")
      }
  }
}
</script>

<style>
@import url("../../assets/css/item.css");
</style>