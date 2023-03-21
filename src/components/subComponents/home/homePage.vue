<template>
  <div class="bannerFooterContainer">
    <div class="asideContainer">
      <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <Goodsitem slot="reference"></Goodsitem>
      </el-popover>
      <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <Purchaseitem slot="reference"></Purchaseitem>
      </el-popover>
      <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <Logistics slot="reference"></Logistics>
      </el-popover>
      <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <Money slot="reference"></Money>
      </el-popover>
      <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <Quotation slot="reference"></Quotation>
      </el-popover>
    </div>
    <div class="CarouselContainer">
      <el-carousel indicator-position="outside" height="25rem">
        <el-carousel-item>
          <img src="../../../assets/static/banner/spanner1.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../assets/static/banner/spanner2.jpg" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Goodsitem from '../../../components/subComponents/goodsitem.vue'
import Purchaseitem from '../../../components/subComponents/purchaseitem.vue'
import Logistics from '../../../components/subComponents/logistics.vue'
import Money from '../../../components/subComponents/money.vue'
import Quotation from '../../../components/subComponents/quotation.vue'
export default {
  data() {
    return {
      bannerImgList: ['../../../assets/static/banner/spanner1.jpg', '../../../assets/static/banner/spanner1.jpg'],
    }
  },
  methods: {},
  components: {
    Goodsitem,
    Purchaseitem,
    Logistics,
    Money,
    Quotation,
  },
}
</script>

<style>
@import url('../../../assets/css/main.css');
</style>
