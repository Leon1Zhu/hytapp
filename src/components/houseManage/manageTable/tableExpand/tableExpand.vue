 <!--
  @author zhuliang
  @date 2019-02-12 16:09
-->
<template>
  <div class="house-table-expand">
    <Collapse v-model="value">
      <Panel name="1" class="house-imgs">
        楼盘图片
        <div class="house-imgs-content" slot="content">
          <div class="img-item-content"  v-for="(item, index) in row.imgs" :key="index" >
            <div class="img-top">
              <div class="img-name">{{item.imgsUrl.split('/')[item.imgsUrl.split('/').length - 1]}}</div>
              <div class="iconfont icon-cha delete-img-icon" @click="deleteImg(item)"></div>
            </div>
            <img class="house-imgs-item" :src="$imgUrl + item.imgsUrl" >
          </div>
        </div>
      </Panel>
      <Panel name="2" class="house-advatage">
        楼盘优势
        <div class="house-advatage-content" slot="content">

        </div>
      </Panel>
      <Panel name="3" class="house-type" v-if="row.type && row.type.length > 0">
        楼盘户型
        <div class="house-type-content" slot="content">
          <house-type-item v-for="(item, index) in row.type" :key="index" :typeData="item"></house-type-item>
        </div>
      </Panel>
    </Collapse>
    <div class="house-advatage">

    </div>
  </div>
</template>

<script>
import './tableExpand.scss';
import houseManageApi from '../../../../api/houseManage';
import houseTypeItem from './houseTypeItem/houseTypeItem';

export default {
  name: 'house-table-expand',
  props: {
    row: Object
  },
  data() {
    return {
      value: ['1', '2', '3'],
    };
  },
  components: {
    houseTypeItem,
  },
  created() {},
  mounted() {},
  methods: {
    deleteImg(item) {
      this.$Modal.confirm({
        title: '图片删除提醒',
        content: '确认删除该图片吗',
        onOk: () => {
          houseManageApi.deleteImg(item.id).then((response) => {
            this.$Notice.success({
              desc: '图片删除成功',
            });
          })
        },
      });
    },
  },
}
</script>
