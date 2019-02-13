 <!--
  @author zhuliang
  @date 2019-02-12 18:31
-->
<template>
  <div class="house-type-item">
    <figure>
      <div class="img-top">
        <div class="img-name">{{typeData.typeName}}</div>
        <div class="iconfont icon-cha delete-img-icon" @click="deleteType()"></div>
      </div>
      <img :src="$imgUrl + typeData.typeImg">
    </figure>
    <div class="type-info">
      <div class="type-name">{{typeData.typeName}}</div>
      <div class="type-measure">{{typeData.typeMeasure}}</div>
      <div class="type-price">{{typeData.typePrice}}</div>
      <div class="type-label-content">
        <div class="type-label" v-for="(item, index) in typeData.typeLabel.split(',')" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import './houseTypeItem.scss';
import houseManageApi from '../../../../../api/houseManage';

export default {
  name: 'house-type-item',
  props: {
    typeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    deleteType(item) {
      this.$Modal.confirm({
        title: '户型删除提醒',
        content: '确认删除户型['+this.typeData.typeName+']吗？',
        onOk: () => {
          houseManageApi.deleteType(this.typeData.id).then((response) => {
            this.$Notice.success({
              desc: '户型删除成功',
            });
          })
        },
      });
    }
  },
}
</script>

<style lang=less>

</style>
